import dayjs from 'dayjs';
import { getAvailableTimesPerDocForDate } from './getAvailableTimesPerDocForDate.js';

export function getShouldDisableDateFunc({
    bookedData,
    doctors,
    onlineAppointment,
    clinicsPicked,
}) {
    return function shouldDisableDate(date) {
        if (
            // Disable weekends
            dayjs(date).day() === 0 ||
            dayjs(date).day() === 6 ||
            // Disable dates that are fully booked,
            // if it is an in clinic appointment
            // consider if there are doctors working this day in chosen clinics
            // according to their schedules
            !(onlineAppointment
                ? getAvailableTimesPerDocForDate({
                      doctors,
                      date,
                      bookedData,
                      onlineAppointment,
                  }).length
                : getAvailableTimesPerDocForDate({
                      doctors,
                      date,
                      bookedData,
                      onlineAppointment: false,
                      clinicsPicked,
                  }).length)
        )
            return true;
        else return false;
    };
}
