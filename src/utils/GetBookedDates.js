export function getBookedDates(doctors, booked) {
    const dateCandidates = new Set();
    booked.forEach((entry) => {
        const doctor = doctors.find((doc) => doc.id === entry.docId);
        entry.bookedDateTime.forEach((bookedDate) => {
            if (bookedDate.times.length === doctor.timeSchedule.length)
                dateCandidates.add(bookedDate.date);
            else if (dateCandidates.has(bookedDate.date))
                dateCandidates.delete(bookedDate.date);
        });
    });
    return Array.from(dateCandidates.values());
}
