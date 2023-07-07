import mongoose from 'mongoose';
import { Doctor } from './initialData/doctors.js';
import { Clinic } from './initialData/clinics.js';
import { Specialty } from './initialData/specialities.js';
import { BookedTime } from './initialData/bookedTimes.js';
import establishConnection from '../../establishConnection.js';

export default async function findAndUpdateOne(model, id, rule) {
    try {
        const result = await model.findOneAndUpdate({ id: id }, rule, { new: true });
        console.log('Update successfull!');
        return result;
    } catch (error) {
        console.error('Error updating data:', error);
    }
}

const updatedData = [
    async () =>
        findAndUpdateOne(BookedTime, 1, {
            $set: { 'bookedDateTime.0.times': ['11:00', '12:00', '18:00'] },
        }),
    // async () => findAndUpdateOne(Doctor, 12, 'name', 'Andrew Park'),
    // async () => findAndUpdateOne(Doctor, 12, { name: 'Andrew Park' }),
];

// const data = await establishConnection(updatedData);
// console.log(data[0].bookedDateTime[0].times);
// console.log(data[0].name);
