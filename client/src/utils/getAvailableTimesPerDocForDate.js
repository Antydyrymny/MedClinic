import dayjs from 'dayjs';

export function getAvailableTimesPerDocForDate({
    date,
    doctors,
    bookedData,
    onlineAppointment,
    clinicsPicked,
}) {
    const availableTimesForDate = [];
    const docsAvailable = onlineAppointment
        ? doctors
        : doctors.filter((doc) =>
              clinicsPicked.map((c) => c.id).includes(doc.clinicSchedule[date.day() - 1])
          );
    bookedData
        .filter((entry) => docsAvailable.map((doc) => doc.id).includes(entry.docId))
        .forEach((entry) => {
            const correspondingDoc = docsAvailable.find((doc) => doc.id === entry.docId);
            const targetDateBookedTimes = entry.bookedDateTime.find((dateTimeObj) => {
                const bookedDate = dateTimeObj.date;
                return bookedDate.isSame(date, 'day');
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
                          (timeSlot) =>
                              !targetDateBookedTimes.times
                                  .map((appointment) => appointment.time)
                                  .includes(timeSlot)
                      );
                // disable times eariler today
                const now = dayjs().tz();
                if (now.isSame(date, 'day')) {
                    newAvailableTimesEntry.times = newAvailableTimesEntry.times.filter(
                        (time) => now.isBefore(now.hour(time.slice(0, 2)))
                    );
                }
                if (!newAvailableTimesEntry.times.length) return;
                if (!onlineAppointment) {
                    newAvailableTimesEntry.clinic = clinicsPicked.find(
                        (clinic) =>
                            clinic.id === correspondingDoc.clinicSchedule[date.day() - 1]
                    );
                }
                availableTimesForDate.push(newAvailableTimesEntry);
            }
        });
    return availableTimesForDate;
}
