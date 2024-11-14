 
import { NextResponse } from 'next/server';
import { connectTODB } from '../../../lib/conn';
import { CommonResponse } from '../../../lib/server/func';
import ChatList from '../../models/ChatList.model';

export const config = {
  maxDuration: 30,
};

let isConnected = false;

async function connectWithRetry() {
  if (isConnected) return;
  
  try {
    await connectTODB();
    isConnected = true;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export async function GET(request) {
  try {
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timeout')), 29000)
    );

    const dataPromise = (async () => {
      await connectWithRetry();

      const { searchParams } = new URL(request.url);
      const pageNum = Math.max(1, parseInt(searchParams.get('page')) || 1);
      const limitNum = Math.min(50, parseInt(searchParams.get('limit')) || 10); // Add upper limit
      const lang = (searchParams.get('lang') || 'en').trim().toLowerCase();

      const skip = (pageNum - 1) * limitNum;

      const [data, totalCount] = await Promise.all([
        ChatList.find({ lang })
          .select('-__v') 
          .skip(skip)
          .limit(limitNum)
          .sort('-createdAt')
          .lean()
          .exec(),
        ChatList.countDocuments({ lang })
      ]);

      const paginate = {
        totalCount,
        totalPage: Math.ceil(totalCount / limitNum),
        currentPage: pageNum,
        currentLimit: limitNum,
        hasNextPage: data.length === limitNum,
      };

      return { data, paginate };
    })();

    const { data, paginate } = await Promise.race([dataPromise, timeoutPromise]);

    return NextResponse.json(
      CommonResponse.success(200, 'Chat fetch!', data, paginate)
    );
  } catch (error) {
    console.error('GET Error:', error);
    const statusCode = error.message === 'Request timeout' ? 504 : 400;
    const message = error.message === 'Request timeout' ? 
      'Request timed out' : 'Failed to fetch Chat';
    
    return NextResponse.json(
      CommonResponse.error(statusCode, message, null)
    );
  }
}

export async function POST(request) {
  try {
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timeout')), 29000)
    );

    const dataPromise = (async () => {
      await connectWithRetry();
      
      const bodyData = await request.json();
      const lang = (bodyData?.lang || 'en').trim().toLowerCase();

      const data = await ChatList.create({ ...bodyData, lang });
      if (!data) {
        throw new Error('Failed to create chat');
      }

      return data.toObject();
    })();

    const data = await Promise.race([dataPromise, timeoutPromise]);

    return NextResponse.json(
      CommonResponse.success(201, 'Chat Created!', data)
    );
  } catch (error) {
    console.error('POST Error:', error);
    const statusCode = error.message === 'Request timeout' ? 504 : 400;
    const message = error.message === 'Request timeout' ? 
      'Request timed out' : 'Failed to create chat';
    
    return NextResponse.json(
      CommonResponse.error(statusCode, message, null)
    );
  }
}