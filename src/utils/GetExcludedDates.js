import dayjs from 'dayjs';

export function getExcludedDates(bookedDates, doctors, onlineAppointment, clinicsPicked) {
    return function shouldDisableDate(date) {
        if (
            // No weekedns
            dayjs(date).day() === 0 ||
            dayjs(date).day() === 6 ||
            // No dates that are already fully booked
            bookedDates.find((candidateDate) =>
                dayjs(candidateDate).isSame(dayjs(date))
            ) ||
            // If it is an in clinic appointment
            // consider if there are doctors working this day in chosen clinics
            // according to their schedules
            (onlineAppointment
                ? false
                : doctors.reduce((noDocsForCurClinicsToday, doc) => {
                      if (
                          !noDocsForCurClinicsToday ||
                          clinicsPicked.includes(
                              doc.clinicSchedule[dayjs(date).day() - 1]
                          )
                      )
                          noDocsForCurClinicsToday = false;
                      return noDocsForCurClinicsToday;
                  }, true))
        )
            return true;
    };
}
