import { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppointmentFilterContext } from 'src/context/AppointmentFilterContext';
import { bookedTimesFetched } from 'src/data/BookedTimes';
import useLocalStorageState from 'src/hooks/useLocalStorageState';
import { appointmentStep3State } from 'src/data/LocalStorageKeys';
import LoadingSpinner from 'src/assets/Pictogram/LoadingSpinner';
import DoctorStep3 from './components/DoctorStep3/DoctorStep3';
import SpecStep3 from './components/SpecStep3/SpecStep3';
import BackButton from './components/BackButton/BackButton';
import AppStep3Css from './AppStep3.module.css';

function AppStep3() {
    const [appParams, setAppParams] = useContext(AppointmentFilterContext);
    const [loading, setLoading] = useState(true);
    const [bookedData, setbookedData] = useState(null);
    const location = useLocation();
    const step3Data = useLocalStorageState(appointmentStep3State, location.state)[0];
    if (!step3Data) localStorage.removeItem(appointmentStep3State);
    const showDoctorsPage = appParams.step3Format === 'Doctor';

    useEffect(() => {
        if (step3Data)
            setbookedData(
                bookedTimesFetched.filter((bookedEnrty) =>
                    step3Data.docsAvailable
                        .map((doc) => doc.id)
                        .includes(bookedEnrty.docId)
                )
            );
        setLoading(false);
    }, [step3Data]);

    return !step3Data ? null : (
        <div className={AppStep3Css.wrapper}>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    {showDoctorsPage ? (
                        <DoctorStep3
                            step3Data={step3Data}
                            bookedData={bookedData}
                            appParamsData={[appParams, setAppParams]}
                        />
                    ) : (
                        <SpecStep3
                            step3Data={step3Data}
                            bookedData={bookedData}
                            appParamsData={[appParams, setAppParams]}
                        />
                    )}
                    <div className={AppStep3Css.back}>
                        <BackButton to={'/app/step2'} />
                    </div>
                </>
            )}
        </div>
    );
}

export default AppStep3;
