// import mongoose from "mongoose";



// export const connectTODB = async()=>
// {
// try {
//     await mongoose.connect(process.env.MONGODB_URI)
//       console.log("Connected to db")
// } catch (error) {
//    console.log("Error while creating a database",error) 
// }

// }


import mongoose from 'mongoose';

export async function connectTODB() {
    try {
        if (mongoose.connection.readyState >= 1) return;

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000, 
            connectTimeoutMS: 10000,
            maxPoolSize: 10, 
            minPoolSize: 0,
            maxIdleTimeMS: 10000, 
        });

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        throw error;
    }
}