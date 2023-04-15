import { useEffect } from 'react';
import useLocalStorageState from 'src/hooks/useLocalStorageState';
import useInformOfPageRefresh from 'src/hooks/useInformOfPageRefresh';
import useRedirect from 'src/hooks/useRedirect';
import { AppointmentFilterContext } from 'src/context/AppointmentFilterContext';
import { Outlet } from 'react-router-dom';
import Progress from './components/Progress';
import { appointmentKey } from 'src/data/LocalStorageKeys';
import AppointLayoutCss from './AppointmentLayout.module.css';

const appointmentSchema = {
    count: 0,
    VHI: false,
    followUp: false,
    child: false,
    openedTab: 'Doctor',
    doctorId: null,
    specialityId: null,
    clinicId: null,
    date: '',
    time: '',
};
// Regular appointment/VHI coverage
// Initial appointment/Follow-up appointment
// Adult/Child
function AppointmentLayout() {
    const [appParams, setAppParams] = useLocalStorageState(
        appointmentKey,
        appointmentSchema
    );
    // Clear data on page refresh
    const [wasRefreshed, setWasRefreshed] = useInformOfPageRefresh();
    useEffect(() => {
        if (wasRefreshed) setAppParams(appointmentSchema);
    }, [wasRefreshed, setAppParams]);
    useRedirect('/app/step1', wasRefreshed);
    useEffect(() => {
        if (wasRefreshed) setWasRefreshed(false);
    }, [wasRefreshed, setWasRefreshed]);
    if (wasRefreshed) return null;

    return (
        <section className={AppointLayoutCss.app}>
            <h1>Schedule an appointment online</h1>
            <div>{appParams.count}</div>
            <button
                onClick={() => setAppParams({ ...appParams, count: appParams.count + 1 })}
            >
                click
            </button>
            <div className={AppointLayoutCss.wrapper}>
                <AppointmentFilterContext.Provider value={appParams}>
                    <Progress />
                    <Outlet />
                </AppointmentFilterContext.Provider>
            </div>
        </section>
    );
}

export default AppointmentLayout;
