import mongoose from 'mongoose';
import { Doctor, doctors } from './doctors.js';
import { Clinic, clinics } from './clinics.js';
import { Specialty, specialties } from './specialities.js';
import { BookedTime, bookedTimes } from './bookedTimes.js';
import establishConnection from '../../dbRequests/establishConnection.js';

async function insertData(model, data) {
    try {
        await model.insertMany(data);
        console.log('Data inserted successfully!');
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

// const dataToInitialize = [
//     async () => insertData(Doctor, doctors),
//     async () => insertData(Clinic, clinics),
//     async () => insertData(Specialty, specialties),
//     async () => insertData(BookedTime, bookedTimes),
// ];

// establishConnection(dataToInitialize);
