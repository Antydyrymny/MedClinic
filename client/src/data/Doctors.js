// console.log(
//     doctorsFetched.map((d) => {
//         const newObj = {};
//         const props = [];
//         for (let prop of Object.keys(d)) {
//             props.push(prop);
//         }
//         props
//             .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
//             .forEach((prop) => (newObj[prop] = d[prop]));
//         return newObj;
//     })
// );
// function createBookedAppointments(doctors) {
//     return doctors.reduce((bookedApps, doc) => {
//         const docBookedTimes = {};
//         docBookedTimes.id = doc.id;
//         docBookedTimes.docId = doc.id;
//         docBookedTimes.bookedTimes = [];
//         doc.timeSchedule.forEach((time) => {
//             if (docBookedTimes.bookedTimes.length < 3 && Math.round(Math.random()) === 1)
//                 docBookedTimes.bookedTimes.push(time);
//         });
//         bookedApps.push(docBookedTimes);
//         return bookedApps;
//     }, []);
// }
// console.log(createBookedAppointments(doctorsFetched));

// const timeOptions = [];
// for (let i = 9; i < 20; i++) {
//     timeOptions.push(i < 10 ? `0${i}:00` : `${i}:00`);
// }

// console.log(
//     doctorsFetched.map((d) => {
//         const newObj = {
//             ...d,
//             worksOnline: Math.round(Math.random()) === 1,
//             clinicSchedule: getClinicSchedule(d.clinicId),
//             timeSchedule: getTimeSchedule(),
//         };
//         delete newObj.availableTimeslots;
//         return newObj;
//     })
// );

// function getClinicSchedule(clinicsId) {
//     return new Array(5).fill(0).map((days) => {
//         const ind = Math.floor(Math.random() * clinicsId.length);
//         return clinicsId[ind];
//     });
// }

// function getTimeSchedule() {
//     const schedule = [];
//     for (let time of timeOptions) {
//         if (Math.round(Math.random()) === 1) schedule.push(time);
//     }
//     return schedule;
// }
