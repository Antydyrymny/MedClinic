import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../../.env') });

const connectionString = process.env.MONGODB_URL;

export default async function establishConnection(functionsArray) {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const results = await Promise.all(functionsArray.map(async (fn) => fn()));
        console.log('Operations successful!');
        return results;
    } catch (error) {
        console.error('Error while establishing connection:', error);
    } finally {
        mongoose.disconnect();
    }
}
