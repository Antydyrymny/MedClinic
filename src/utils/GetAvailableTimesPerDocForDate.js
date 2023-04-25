import dayjs from 'dayjs';

export function getAvailableTimesPerDocForDate(date, doctors, bookedTimesData) {
    const availableTimesForDate = [];
    bookedTimesData
        .filter((entry) => doctors.map((doc) => doc.id).includes(entry.docId))
        .forEach((entry) => {
            const correspondingDoc = doctors.find((doc) => doc.id === entry.docId);
            const targetDateBookedTimes = entry.bookedDateTime.find((dateTimeObj) => {
                const day1 = dayjs(dateTimeObj.date);
                const day2 = dayjs(date);
                return day1.isSame(day2);
            });
            if (
                !targetDateBookedTimes ||
                targetDateBookedTimes.times.length < correspondingDoc.timeSchedule.length
            ) {
                const newAvailableTimesEntry = {};
                newAvailableTimesEntry.doctor = correspondingDoc;
                newAvailableTimesEntry.times = !targetDateBookedTimes
                    ? correspondingDoc.timeSchedule
                    : correspondingDoc.timeSchedule.filter(
                          (timeSlot) => !targetDateBookedTimes.times.includes(timeSlot)
                      );
                availableTimesForDate.push(newAvailableTimesEntry);
            }
        });
    return availableTimesForDate;
}
