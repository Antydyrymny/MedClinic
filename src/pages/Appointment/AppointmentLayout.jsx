import { useEffect } from 'react';
import useLocalStorageState from 'src/hooks/useLocalStorageState';
import useInformOfPageRefresh from 'src/hooks/useInformOfPageRefresh';
import { permitVisitApp3, permitVisitApp4 } from 'src/utils/PermitVisit';
import { ClearAppDataOnRefresh } from 'src/utils/ClearAppDataOnRefresh';
import useRedirect from 'src/hooks/useRedirect';
import { AppointmentFilterContext } from 'src/context/AppointmentFilterContext';
import { Outlet, useLocation } from 'react-router-dom';
import { appointmentSchema } from 'src/data/AppointmentSchemas';
import Progress from './components/Progress/Progress';
import { appointmentKey } from 'src/data/LocalStorageKeys';
import AppointLayoutCss from './AppointmentLayout.module.css';

function AppointmentLayout() {
    const [appParams, setAppParams] = useLocalStorageState(
        appointmentKey,
        appointmentSchema
    );
    const location = useLocation();
    const currentStep = +location.pathname.at(-1);

    // Redirect from page if previous steps aren't finished
    const permitStep3 = permitVisitApp3(appParams);
    const permitStep4 = permitVisitApp4(appParams);
    useRedirect(
        '/app/step1',
        (currentStep === 3 && !permitStep3) || (currentStep === 4 && !permitStep4)
    );

    // Clear data on page refresh
    const [wasRefreshed, setWasRefreshed] = useInformOfPageRefresh();
    useEffect(() => {
        if (wasRefreshed) {
            ClearAppDataOnRefresh(appParams, setAppParams, currentStep);
            setWasRefreshed(false);
        }
    }, [wasRefreshed, setWasRefreshed, appParams, setAppParams, currentStep]);

    return (
        <section className={AppointLayoutCss.app}>
            <div className={AppointLayoutCss.wrapper}>
                <h1 className={AppointLayoutCss.heading}>
                    Schedule an appointment online
                </h1>
                <div className={AppointLayoutCss.contentWrapper}>
                    <AppointmentFilterContext.Provider value={[appParams, setAppParams]}>
                        <Progress
                            currentStep={currentStep}
                            permitStep3={permitStep3}
                            permitStep4={permitStep4}
                        />
                        <Outlet />
                    </AppointmentFilterContext.Provider>
                </div>
            </div>
        </section>
    );
}

export default AppointmentLayout;
