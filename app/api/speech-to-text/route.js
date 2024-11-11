// app/api/speech-to-text/route.js
import { NextResponse } from 'next/server';
import OpenAI from 'openai';



export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("audio");

    if (!file) {
      return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, // Ensure you have this environment variable set
    });

    const transcription = await openai.audio.transcriptions.create({
      file,
      model: "whisper-1",
    });

    return NextResponse.json(transcription);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
