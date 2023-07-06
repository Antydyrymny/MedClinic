import { useEffect } from 'react';
import {
    DoctorsAllContext,
    SpecialitiesContext,
    ClinicsContext,
} from 'src/context/FetchDataContext';
import { AppointmentFilterContext } from 'src/context/AppointmentFilterContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import useSessionStorageState from 'src/hooks/useSessionStorageState';
import useInformOfPageRefresh from 'src/hooks/useInformOfPageRefresh';
import { permitVisitApp3, permitVisitApp4 } from 'src/utils/permitVisit';
import { clearAppData } from 'src/utils/clearAppData';
import useRedirect from 'src/hooks/useRedirect';
import { Outlet, useLocation } from 'react-router-dom';
import { appointmentSchema } from 'src/data/AppointmentSchemas';
import Progress from './components/Progress/Progress';
import {
    appointmentKey,
    doctorsKey,
    specialitiesKey,
    clinicsKey,
} from 'src/data/SessionStorageKeys';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';
import AppointLayoutCss from './AppointmentLayout.module.css';

function AppointmentLayout() {
    const [appParams, setAppParams] = useSessionStorageState(
        appointmentKey,
        appointmentSchema
    );
    const [doctors, setDoctors] = useSessionStorageState(doctorsKey, null);
    const [specialties, setSpecialties] = useSessionStorageState(specialitiesKey, null);
    const [clinics, setClinics] = useSessionStorageState(clinicsKey, null);

    const location = useLocation();
    const currentStep = +location.pathname.at(-1);

    // Redirect from page if previous steps aren't finished
    const permitStep3 = permitVisitApp3(appParams);
    const permitStep4 = permitVisitApp4(appParams);
    useRedirect(
        '/app/step1',
        (currentStep === 3 && !permitStep3) ||
            (currentStep === 4 && !permitStep4) ||
            (currentStep === 5 && !appParams.showSummary)
    );

    // Clear data on page refresh
    const [wasRefreshed, setWasRefreshed] = useInformOfPageRefresh();
    useEffect(() => {
        if (wasRefreshed) {
            clearAppData(appParams, setAppParams, currentStep);
            setWasRefreshed(false);
        }
    }, [wasRefreshed, setWasRefreshed, appParams, setAppParams, currentStep]);

    dayjs.locale('en-gb');

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
                        <DoctorsAllContext.Provider value={[doctors, setDoctors]}>
                            <SpecialitiesContext.Provider
                                value={[specialties, setSpecialties]}
                            >
                                <ClinicsContext.Provider value={[clinics, setClinics]}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Outlet />
                                    </LocalizationProvider>
                                </ClinicsContext.Provider>
                            </SpecialitiesContext.Provider>
                        </DoctorsAllContext.Provider>
                    </AppointmentFilterContext.Provider>
                </div>
            </div>
        </section>
    );
}

export default AppointmentLayout;
