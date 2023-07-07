import mongoose from 'mongoose';
import { Doctor } from './initialData/doctors.js';
import { Clinic } from './initialData/clinics.js';
import { Specialty } from './initialData/specialities.js';
import { BookedTime } from './initialData/bookedTimes.js';
import establishConnection from '../../establishConnection.js';

export default async function findData(model, rule = {}) {
    try {
        const result = await model.find(rule);
        console.log('Data retrieval successfull!');
        return result;
    } catch (error) {
        console.error('Error retrieving data:', error);
    }
}

const allData = [
    // async () => findData(Doctor),
    // async () => findData(Clinic),
    // async () => findData(Specialty),
    async () => findData(BookedTime, { id: 2 }),
];

// console.log(await establishConnection(allData));
const data = await establishConnection(allData);
console.log(data[0][0].bookedDateTime[0]);
