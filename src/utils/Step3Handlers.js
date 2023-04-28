import { getAvailableTimesPerDocForDate } from './GetAvailableTimesPerDocForDate';

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
    bookedData,
    doctors,
}) {
    return (boolean, clinicName) => {
        let newClinicsPicked = [];
        if (clinicsPicked.length === 1 && !boolean) return;
        else if (boolean) {
            newClinicsPicked = [
                ...clinicsPicked,
                clinics.find((c) => c.name === clinicName),
            ];
        } else if (!boolean) {
            newClinicsPicked = clinicsPicked.filter(
                (clinic) => clinic.name !== clinicName
            );
        }
        setClinicsPicked(newClinicsPicked);
        // If date is set and it is an in clinic appointment and
        // changing clinics makes chosen date unavailable -
        // set chosen date to null
        if (
            !boolean &&
            appParams.date &&
            !appParams.onlineAppointment &&
            !getAvailableTimesPerDocForDate({
                date: appParams.date,
                doctors,
                bookedData,
                onlineAppointment: appParams.onlineAppointment,
                clinicsPicked: newClinicsPicked,
            }).length
        )
            setAppParams({ ...appParams, date: null });
    };
}
