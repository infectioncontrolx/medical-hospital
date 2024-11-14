import mongoose from "mongoose";



export const connectTODB = async () => {
    try {
        console.log("❤️‍🔥", process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to db")
    } catch (error) {
        console.log("Error while creating a database", error)
    }

}

// !2
// import mongoose from 'mongoose';

// export async function connectTODB() {
//     try {
//         if (mongoose.connection.readyState >= 1) return;

//         await mongoose.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             serverSelectionTimeoutMS: 5000,
//             socketTimeoutMS: 45000,
//             connectTimeoutMS: 10000,
//             maxPoolSize: 10,
//             minPoolSize: 0,
//             maxIdleTimeMS: 10000,
//         });

//         console.log('MongoDB connected successfully');
//     } catch (error) {
//         console.error('MongoDB connection failed:', error);
//         throw error;
//     }
// }

// !3

// import mongoose from 'mongoose';

// export async function connectTODB() {
//   try {
//     if (mongoose.connection.readyState >= 1) return;

//     await mongoose.connect(process.env.MONGODB_URI, {
//       serverSelectionTimeoutMS: 5000,
//       socketTimeoutMS: 45000,
//       connectTimeoutMS: 10000,
//       maxPoolSize: 10,
//       minPoolSize: 0,
//       maxIdleTimeMS: 10000,
//       heartbeatFrequencyMS: 5000,
//       retryWrites: true,
//       retryReads: true
//     });

//     console.log('MongoDB connected successfully');
//   } catch (error) {
//     console.error('MongoDB connection failed:', error);
//     throw error;
//   }
// }

// mongoose.connection.on('connected', () => {
//   console.log('MongoDB connection established');
// });

// mongoose.connection.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });

// mongoose.connection.on('disconnected', () => {
//   console.log('MongoDB connection disconnected');
// });

// process.on('SIGINT', async () => {
//   try {
//     await mongoose.connection.close();
//     console.log('MongoDB connection closed through app termination');
//     process.exit(0);
//   } catch (err) {
//     console.error('Error during MongoDB connection closure:', err);
//     process.exit(1);
//   }
// });