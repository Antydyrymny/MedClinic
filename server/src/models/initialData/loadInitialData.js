// import { Doctor, doctors } from './doctors.js';
// import { Clinic, clinics } from './clinics.js';
// import { Specialty, specialties } from './specialities.js';
// import { BookedTime, bookedTimes } from './bookedTimes.js';
// import establishConnection from '../../dbRequests/establishConnection.js';
// import saveData from '../../dbRequests/saveData.js';

// async function insertData(model, data) {
//     try {
//         await model.insertMany(data);
//         console.log('Data inserted successfully!');
//     } catch (error) {
//         console.error('Error inserting data:', error);
//     }
// }

// const dataToInitialize = [
// async () => insertData(Doctor, doctors),
// async () => insertData(Clinic, clinics),
// async () => insertData(Specialty, specialties),
// async () => insertData(BookedTime, bookedTimes),
// ];

// const dataToInitialize = bookedTimes.map(
//     (entry) => async () => saveData(BookedTime, entry)
// );
// establishConnection(dataToInitialize);
