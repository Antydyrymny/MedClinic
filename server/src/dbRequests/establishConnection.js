import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../../.env') });

const connectionString = process.env.MONGODB_URL;

export default async function establishConnection(
    functionsArray,
    cleanupFunctionsArray,
    independentFunctions = true
) {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        let results;
        if (independentFunctions) {
            results = await Promise.all(functionsArray.map((fn) => fn()));
        } else {
            results = await functionsArray.reduce(
                (promises, fn) => promises.then(fn),
                Promise.resolve()
            );
        }
        console.log('Operations successful!');
        return results;
    } catch (error) {
        if (cleanupFunctionsArray) {
            console.log('Performing cleanup operations');
            await Promise.allSettled(cleanupFunctionsArray.map((fn) => fn()));
            console.log('Cleanup successful');
        }
        console.error('Error while establishing connection:', error);
        throw new Error(error);
    } finally {
        mongoose.disconnect();
    }
}
