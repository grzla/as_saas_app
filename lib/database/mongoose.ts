import mongoose, {Mongoose} from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null }
}

export const connectToDatabase = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if(!MONGODB_URI) throw new Error('Missing MONGODB_URI');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, { 
        dbName: 'imaginify',
        bufferCommands: false, 
    })

    cached.conn = await cached.promise;
    return cached.conn;
}

/*
import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL!;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose

if(!cached) {
    cached = (global as any).mongoose = {
        conn: null, promise: null
    }
}

export const connect = async () => {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');

    cached.promise = 
        cached.promise || 
        mongoose.connect(MONGODB_URL, { 
            dbName: 'imagigenie', bufferCommands: false, connectTimeoutMS: 30000,
        })

    cached.conn = await cached.promise;

    return cached.conn;
};
*/
