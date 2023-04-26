import dayjs from 'dayjs';
import { getExcludedDates } from './GetExcludedDates';

export function onOnlineChange(appParams, setAppParams) {
    return (tabName) =>
        setAppParams({
            ...appParams,
            onlineAppointment: tabName === 'In clinic' ? false : true,
        });
}

export function onClinicCheck({
    clinics,
    clinicsPicked,
    setClinicsPicked,
    appParams,
    setAppParams,
    bookedDates,
    doctors,
}) {
    return (boolean, clinicName) => {
        let newClinicsPicked = null;
        if (!boolean && clinicsPicked.length === 1) return;
        else if (boolean) {
            newClinicsPicked = [
                ...clinicsPicked,
                clinics.find((c) => c.name === clinicName).id,
            ];
            setClinicsPicked(newClinicsPicked);
        } else if (!boolean) {
            newClinicsPicked = clinicsPicked.filter(
                (clinic) => clinics.find((c) => c.id === clinic).name !== clinicName
            );
            setClinicsPicked(newClinicsPicked);
        }
        // If changing clinics makes chosen date unavailable - set chosen date to null
        if (
            !boolean &&
            getExcludedDates(
                bookedDates,
                doctors,
                appParams.onlineAppointment,
                newClinicsPicked
            )(dayjs(appParams.date))
        )
            setAppParams({ ...appParams, date: null });
    };
}

export function getCLinicForDate(entry, appParams, clinics) {
    return clinics.find(
        (clinic) =>
            clinic.id === entry.doctor.clinicSchedule[dayjs(appParams.date).day() - 1]
    );
}
