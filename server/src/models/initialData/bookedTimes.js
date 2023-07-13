import mongoose from 'mongoose';

export const timeSchema = new mongoose.Schema({
    time: String,
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', default: null },
});

export const bookedTimeSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    docId: { type: Number, unique: true },
    bookedDateTime: [
        {
            date: Date,
            times: {
                type: [timeSchema],
                validate: {
                    validator: (times) => {
                        const uniqueTimes = new Set(times.map((day) => day.time));
                        return uniqueTimes.size === times.length;
                    },
                },
                message: 'Timeslot is already booked',
            },
        },
    ],
});

export const BookedTime = mongoose.model('BookedTime', bookedTimeSchema);

// export const bookedTimes = [
//     {
//         id: 0,
//         docId: 0,
//         bookedDateTime: [
//             {
//                 date: '2023-07-03',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '11:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 1111,
//         docId: 1111,
//         bookedDateTime: [
//             {
//                 date: '2023-07-03',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '11:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 1,
//         docId: 1,
//         bookedDateTime: [
//             {
//                 date: '2023-07-03',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-04',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-07-05', times: [{ clientId: null, time: '11:00' }] },
//             {
//                 date: '2023-07-06',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-07',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-13',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-18',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-26',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-28',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-07-31', times: [{ clientId: null, time: '14:00' }] },
//             {
//                 date: '2023-08-11',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-08-14', times: [{ clientId: null, time: '11:00' }] },
//             {
//                 date: '2023-08-21',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '14:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-30',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-06',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-08',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '14:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-15',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-09-19', times: [{ clientId: null, time: '12:00' }] },
//         ],
//     },
//     {
//         id: 2,
//         docId: 2,
//         bookedDateTime: [
//             {
//                 date: '2023-07-05',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-12',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-17',
//                 times: [
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-28',
//                 times: [
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-31',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             { date: '2023-08-08', times: [{ clientId: null, time: '17:00' }] },
//             { date: '2023-08-14', times: [{ clientId: null, time: '17:00' }] },
//             {
//                 date: '2023-08-15',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-17',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-29',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                 ],
//             },
//             { date: '2023-09-07', times: [{ clientId: null, time: '17:00' }] },
//             { date: '2023-09-12', times: [{ clientId: null, time: '15:00' }] },
//             { date: '2023-09-13', times: [{ clientId: null, time: '12:00' }] },
//             {
//                 date: '2023-09-20',
//                 times: [
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 3,
//         docId: 3,
//         bookedDateTime: [
//             {
//                 date: '2023-07-06',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-10',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-11',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-28',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-01',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-04',
//                 times: [
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-07',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-10',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-08-16', times: [{ clientId: null, time: '14:00' }] },
//             {
//                 date: '2023-08-23',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-28',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-30',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-31',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-08',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 4,
//         docId: 4,
//         bookedDateTime: [
//             {
//                 date: '2023-07-06',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-07',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-19',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-27',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-01',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-16',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             { date: '2023-08-31', times: [{ clientId: null, time: '17:00' }] },
//             {
//                 date: '2023-09-06',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-11',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-27',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-29',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 5,
//         docId: 5,
//         bookedDateTime: [
//             {
//                 date: '2023-07-05',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-06',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-07',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-11',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-18',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-21',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-24',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-31',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-08-01', times: [{ clientId: null, time: '18:00' }] },
//             {
//                 date: '2023-08-02',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-08-04', times: [{ clientId: null, time: '16:00' }] },
//             {
//                 date: '2023-08-07',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-08',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-09',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-08-14', times: [{ clientId: null, time: '18:00' }] },
//             {
//                 date: '2023-08-15',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-08-17', times: [{ clientId: null, time: '16:00' }] },
//             {
//                 date: '2023-08-18',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-23',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-28',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-01',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-05',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-07',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-12',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-15',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-20',
//                 times: [
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-26',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-29',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 6,
//         docId: 6,
//         bookedDateTime: [
//             {
//                 date: '2023-07-04',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-13',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-19',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-24',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-04',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-11',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-16',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-17',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-22',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-06',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             { date: '2023-09-12', times: [{ clientId: null, time: '17:00' }] },
//             {
//                 date: '2023-09-13',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-15',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-29',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 7,
//         docId: 7,
//         bookedDateTime: [
//             {
//                 date: '2023-07-04',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-07',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-10',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-11',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-13',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-17',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-19',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-20',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-27',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-28',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-01',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-07',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-09',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-11',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-22',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-04',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-07',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-13',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-20',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-25',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 8,
//         docId: 8,
//         bookedDateTime: [
//             {
//                 date: '2023-07-04',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-10',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-12',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-28',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-04',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-09',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-10',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-15',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-17',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-29',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-04',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-12',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-13',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-18',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-20',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-26',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-28',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 9,
//         docId: 9,
//         bookedDateTime: [
//             {
//                 date: '2023-07-04',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-05',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-06',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-11',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-12',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-20',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-24',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-25',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-26',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-01',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-03',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-08',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-11',
//                 times: [
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-15',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-21',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-22',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-23',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-24',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-25',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-05',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-07',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-08',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-14',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-20',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-25',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-26',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 10,
//         docId: 10,
//         bookedDateTime: [
//             {
//                 date: '2023-07-04',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-05',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-10',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-12',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '15:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-13',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-21',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-25',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-02',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-03',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-04',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-08',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-09',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-14',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-15',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-18',
//                 times: [
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-21',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-22',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-24',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-01',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '15:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-12',
//                 times: [
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-14',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-21',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-25',
//                 times: [
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             { date: '2023-09-26', times: [{ clientId: null, time: '16:00' }] },
//         ],
//     },
//     {
//         id: 11,
//         docId: 11,
//         bookedDateTime: [
//             { date: '2023-07-04', times: [{ clientId: null, time: '14:00' }] },
//             {
//                 date: '2023-07-11',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-13',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             { date: '2023-07-18', times: [{ clientId: null, time: '16:00' }] },
//             {
//                 date: '2023-07-24',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-25',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-26',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-01',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-02',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-03',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-04',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-08',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-14',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-15',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-21',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-23',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-28',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-30',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-01',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-06',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             { date: '2023-09-11', times: [{ clientId: null, time: '16:00' }] },
//             {
//                 date: '2023-09-14',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-18',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-21',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-22',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-25',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-26',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-27',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-28',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-29',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 12,
//         docId: 12,
//         bookedDateTime: [
//             {
//                 date: '2023-07-10',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-12',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-17',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-18',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-24',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-28',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-10',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-21',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-22',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-28',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-29',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-01',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-13',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             { date: '2023-09-18', times: [{ clientId: null, time: '09:00' }] },
//             {
//                 date: '2023-09-19',
//                 times: [
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-20',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-21',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-26',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 13,
//         docId: 13,
//         bookedDateTime: [
//             {
//                 date: '2023-07-10',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-12',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-13',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-14',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-19',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-25',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-26',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-31',
//                 times: [
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-01',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-15',
//                 times: [
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-18',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-21',
//                 times: [
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-22',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-24',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-25',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-01',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-06',
//                 times: [
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-07',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-11',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-12',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-09-14', times: [{ clientId: null, time: '10:00' }] },
//             {
//                 date: '2023-09-19',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-22',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-25',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-29',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 14,
//         docId: 14,
//         bookedDateTime: [
//             {
//                 date: '2023-07-04',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             { date: '2023-07-05', times: [{ clientId: null, time: '15:00' }] },
//             {
//                 date: '2023-07-06',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-10',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-12',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-13',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-17',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-18',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-20',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-26',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-27',
//                 times: [
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-02',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-07',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-08',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-09',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-10',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-14',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-15',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-17',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-18',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-21',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             { date: '2023-08-24', times: [{ clientId: null, time: '19:00' }] },
//             {
//                 date: '2023-08-25',
//                 times: [
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-28',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-30',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             { date: '2023-09-05', times: [{ clientId: null, time: '15:00' }] },
//             {
//                 date: '2023-09-11',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-13',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-14',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-21',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-22',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-25',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-26',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-27',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             { date: '2023-09-28', times: [{ clientId: null, time: '19:00' }] },
//         ],
//     },
//     {
//         id: 15,
//         docId: 15,
//         bookedDateTime: [
//             {
//                 date: '2023-07-05',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-06',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-10',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-14',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-18',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             { date: '2023-07-19', times: [{ clientId: null, time: '16:00' }] },
//             {
//                 date: '2023-07-20',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             { date: '2023-07-26', times: [{ clientId: null, time: '16:00' }] },
//             {
//                 date: '2023-07-27',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-04',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             { date: '2023-08-09', times: [{ clientId: null, time: '16:00' }] },
//             {
//                 date: '2023-08-14',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-15',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-17',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-21',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-23',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-24',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-25',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-30',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-31',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-04',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-05',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             { date: '2023-09-07', times: [{ clientId: null, time: '16:00' }] },
//             {
//                 date: '2023-09-12',
//                 times: [
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-20',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-21',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-25',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-27',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-28',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             { date: '2023-09-29', times: [{ clientId: null, time: '17:00' }] },
//         ],
//     },
//     {
//         id: 16,
//         docId: 16,
//         bookedDateTime: [
//             { date: '2023-07-14', times: [{ clientId: null, time: '18:00' }] },
//             {
//                 date: '2023-07-19',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-24',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-07-27', times: [{ clientId: null, time: '10:00' }] },
//             {
//                 date: '2023-08-04',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             { date: '2023-08-08', times: [{ clientId: null, time: '13:00' }] },
//             {
//                 date: '2023-08-16',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-17',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-21',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-30',
//                 times: [
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-11',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 17,
//         docId: 17,
//         bookedDateTime: [
//             {
//                 date: '2023-07-03',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-07-04', times: [{ clientId: null, time: '11:00' }] },
//             {
//                 date: '2023-07-05',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-07',
//                 times: [
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-11',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-12',
//                 times: [
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-21',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-25',
//                 times: [
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-27',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-03',
//                 times: [
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-04',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-10',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-15',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-17',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-18',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-24',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             { date: '2023-08-25', times: [{ clientId: null, time: '11:00' }] },
//             {
//                 date: '2023-08-30',
//                 times: [
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-31',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-09-05', times: [{ clientId: null, time: '14:00' }] },
//             {
//                 date: '2023-09-11',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-12',
//                 times: [
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-14',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-15',
//                 times: [
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-27',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 18,
//         docId: 18,
//         bookedDateTime: [
//             {
//                 date: '2023-07-03',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-04',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-05',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-06',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-11',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             { date: '2023-07-17', times: [{ clientId: null, time: '19:00' }] },
//             {
//                 date: '2023-07-19',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-20',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             { date: '2023-07-24', times: [{ clientId: null, time: '14:00' }] },
//             {
//                 date: '2023-07-25',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-26',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             { date: '2023-07-31', times: [{ clientId: null, time: '14:00' }] },
//             {
//                 date: '2023-08-01',
//                 times: [
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-03',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-04',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-07',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-09',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-10',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-14',
//                 times: [
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-15',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-25',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-28',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-01',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-04',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-05',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-08',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             { date: '2023-09-11', times: [{ clientId: null, time: '19:00' }] },
//             {
//                 date: '2023-09-15',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-19',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-20',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-21',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-28',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-29',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 19,
//         docId: 19,
//         bookedDateTime: [
//             {
//                 date: '2023-07-04',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-11',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-07-13', times: [{ clientId: null, time: '10:00' }] },
//             {
//                 date: '2023-07-17',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-20',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-21',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-26',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-02',
//                 times: [
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-07',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-08-09', times: [{ clientId: null, time: '13:00' }] },
//             {
//                 date: '2023-08-14',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-18',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-21',
//                 times: [
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-23',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-25',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-01',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-04',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-05',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-06',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-07',
//                 times: [
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-08',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-12',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-22',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-27',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 20,
//         docId: 20,
//         bookedDateTime: [
//             {
//                 date: '2023-07-07',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-13',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-14',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-19',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-20',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-21',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-24',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-28',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-11',
//                 times: [
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-15',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-21',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-22',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-24',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-25',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-28',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-29',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-31',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-07',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-08',
//                 times: [
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '16:00' },
//                 ],
//             },
//             { date: '2023-09-15', times: [{ clientId: null, time: '17:00' }] },
//             {
//                 date: '2023-09-20',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-27',
//                 times: [
//                     { clientId: null, time: '09:00' },
//                     { clientId: null, time: '12:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '16:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 21,
//         docId: 21,
//         bookedDateTime: [
//             {
//                 date: '2023-07-03',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-04',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-05',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-06',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-07',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-11',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-12',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-13',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-07-14', times: [{ clientId: null, time: '10:00' }] },
//             {
//                 date: '2023-07-17',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-07-18', times: [{ clientId: null, time: '14:00' }] },
//             {
//                 date: '2023-07-20',
//                 times: [
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-21',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-24',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-26',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-27',
//                 times: [
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-31',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-01',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-02',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-04',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-07',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-16',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-17',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-28',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-29',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-30',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-31',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-05',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-06',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-12',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-13',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-18',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-19',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-20',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-26',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-28',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-29',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 22,
//         docId: 22,
//         bookedDateTime: [
//             {
//                 date: '2023-07-04',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             { date: '2023-07-05', times: [{ clientId: null, time: '18:00' }] },
//             {
//                 date: '2023-07-07',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-13',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-07-17', times: [{ clientId: null, time: '18:00' }] },
//             {
//                 date: '2023-07-20',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-28',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-01',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-02',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-03',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-10',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-21',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-23',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-29',
//                 times: [
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-30',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-31',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             { date: '2023-09-11', times: [{ clientId: null, time: '18:00' }] },
//             {
//                 date: '2023-09-13',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-14',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-19',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-20',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             { date: '2023-09-22', times: [{ clientId: null, time: '19:00' }] },
//             {
//                 date: '2023-09-27',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 23,
//         docId: 23,
//         bookedDateTime: [
//             {
//                 date: '2023-07-04',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '15:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-06',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-07',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-10',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-11',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-12',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-13',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-14',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-19',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-21',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-27',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-28',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-02',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-09',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-10',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-15',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-22',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-29',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-31',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-01',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-08',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-13',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-18',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-19',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-20',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-25',
//                 times: [
//                     { clientId: null, time: '11:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '15:00' },
//                     { clientId: null, time: '18:00' },
//                     { clientId: null, time: '19:00' },
//                 ],
//             },
//         ],
//     },
//     {
//         id: 24,
//         docId: 24,
//         bookedDateTime: [
//             {
//                 date: '2023-07-03',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-10',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-11',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-14',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-07-19',
//                 times: [
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-01',
//                 times: [
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-08-02', times: [{ clientId: null, time: '18:00' }] },
//             { date: '2023-08-03', times: [{ clientId: null, time: '18:00' }] },
//             {
//                 date: '2023-08-07',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-08',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-09',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-11',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-14',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-15',
//                 times: [
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-16',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-17',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-21',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-23',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-25',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-08-31',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-04',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-09-07', times: [{ clientId: null, time: '18:00' }] },
//             {
//                 date: '2023-09-08',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '17:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-13',
//                 times: [
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             {
//                 date: '2023-09-14',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-09-15', times: [{ clientId: null, time: '17:00' }] },
//             {
//                 date: '2023-09-27',
//                 times: [
//                     { clientId: null, time: '10:00' },
//                     { clientId: null, time: '13:00' },
//                     { clientId: null, time: '14:00' },
//                     { clientId: null, time: '17:00' },
//                     { clientId: null, time: '18:00' },
//                 ],
//             },
//             { date: '2023-09-28', times: [{ clientId: null, time: '17:00' }] },
//         ],
//     },
// ];
