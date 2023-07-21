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
              clinicsPicked
                  .map((c) => c.id)
                  .includes(doc.clinicSchedule[dayjs(date).day() - 1])
          );
    bookedData
        .filter((entry) => docsAvailable.map((doc) => doc.id).includes(entry.docId))
        .forEach((entry) => {
            const correspondingDoc = docsAvailable.find((doc) => doc.id === entry.docId);
            const targetDateBookedTimes = entry.bookedDateTime.find((dateTimeObj) => {
                const bookedDate = dayjs(dateTimeObj.date);
                const chosenDate = dayjs(date);
                return bookedDate.isSame(chosenDate, 'day');
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
                if (dayjs().isSame(dayjs(date), 'day')) {
                    newAvailableTimesEntry.times = newAvailableTimesEntry.times.filter(
                        (time) => dayjs().isBefore(dayjs().hour(time.slice(0, 2)))
                    );
                }
                if (!newAvailableTimesEntry.times.length) return;
                if (!onlineAppointment) {
                    newAvailableTimesEntry.clinic = clinicsPicked.find(
                        (clinic) =>
                            clinic.id ===
                            correspondingDoc.clinicSchedule[dayjs(date).day() - 1]
                    );
                }
                availableTimesForDate.push(newAvailableTimesEntry);
            }
        });
    return availableTimesForDate;
}
