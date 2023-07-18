// Generate the random date;

// const weekdays = [];
// const d = dayjs('2023-07-01');
// let i = d.date();

// while (true) {
//     const newD = d.date(i++);
//     if (newD.month() === 9) break;
//     if (newD.day() !== 0 && newD.day() !== 6)
//         weekdays.push(newD.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'));
// }

// const weekdays = [];
// const d = new Date(2023, 6, 1);

// let i = d.getDate();
// while (true) {
//     const newD = new Date(d.getFullYear(), d.getMonth(), i++);
//     if (newD.getMonth() === 8) break;
//     if (newD.getDay() !== 0 && newD.getDay() !== 6) weekdays.push(newD);
// }

// function bookedDateTime() {
//     const bookedTimes = doctorsFetched.map((d) => ({ id: d.id, docId: d.id }));
//     return bookedTimes.map((bt) => {
//         const newObj = { ...bt };
//         newObj.bookedDateTime = [];
//         let randomDateInd = new Set();
//         const limit = getRandomInt(10, 40);
//         while (randomDateInd.size < limit) {
//             randomDateInd.add(Math.floor(Math.random() * weekdays.length));
//         }
//         Array.from(randomDateInd.values())
//             .sort((a, b) => a - b)
//             .forEach((r) => {
//                 const dateTimeObj = {};
//                 dateTimeObj.date = weekdays[r];
//                 const docTimeSchedule = doctorsFetched.find(
//                     (d) => d.id === bt.docId
//                 ).timeSchedule;
//                 if (Math.round(Math.random())) {
//                     dateTimeObj.times = docTimeSchedule;
//                 } else {
//                     dateTimeObj.times = [];
//                     do {
//                         docTimeSchedule.forEach((time) => {
//                             if (Math.round(Math.random())) dateTimeObj.times.push(time);
//                         });
//                     } while (!dateTimeObj.times.length);
//                 }
//                 newObj.bookedDateTime.push(dateTimeObj);
//             });
//         return newObj;
//     });
// }

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
// }

// console.log(JSON.stringify(bookedDateTime(), null, 2));

// const example = {
//     id: 1,
//     docId: 1,
//     bookedDateTime: [
//         { date: 1, times: [10, 11] },
//         { date: 2, times: [12, 15] },
//     ],
// };
