export function getAvailableTimesForDate(date, doctors, bookedTimesData) {
    const availableTimesForDate = [];
    bookedTimesData.forEach((entry) => {
        const correspondingDoc = doctors.find((doc) => doc.id === entry.docId);
        const targetDateBookedTimes = entry.bookedDateTime.find(
            (dateTimeObj) => dateTimeObj.date === date
        );
        if (
            !targetDateBookedTimes ||
            targetDateBookedTimes.length < correspondingDoc.timeSchedule.length
        ) {
            const newAvailableTimesEntry = {};
            newAvailableTimesEntry.doctor = correspondingDoc;
            newAvailableTimesEntry.times = correspondingDoc.timeSchedule.filter(
                (timeSlot) => !targetDateBookedTimes.includes(timeSlot)
            );
            availableTimesForDate.push(newAvailableTimesEntry);
        }
    });
    return availableTimesForDate;
}
