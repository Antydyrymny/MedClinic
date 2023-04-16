import { useEffect } from 'react';
import useLocalStorageState from 'src/hooks/useLocalStorageState';
import useInformOfPageRefresh from 'src/hooks/useInformOfPageRefresh';
import useRedirect from 'src/hooks/useRedirect';
import { AppointmentFilterContext } from 'src/context/AppointmentFilterContext';
import { Outlet } from 'react-router-dom';
import Progress from './components/Progress/Progress';
import { appointmentKey } from 'src/data/LocalStorageKeys';
import AppointLayoutCss from './AppointmentLayout.module.css';

const appointmentSchema = {
    Vhi: false,
    followUp: false,
    child: false,
    openedTab: 'Doctor',
    doctorId: null,
    specialityId: null,
    clinicId: null,
    date: '',
    time: '',
};

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
            <div className={AppointLayoutCss.wrapper}>
                <h1 className={AppointLayoutCss.heading}>
                    Schedule an appointment online
                </h1>
                <div className={AppointLayoutCss.contentWrapper}>
                    <AppointmentFilterContext.Provider value={[appParams, setAppParams]}>
                        <Progress />
                        <Outlet />
                    </AppointmentFilterContext.Provider>
                </div>
            </div>
        </section>
    );
}

export default AppointmentLayout;
