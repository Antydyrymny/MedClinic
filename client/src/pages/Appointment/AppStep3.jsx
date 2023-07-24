import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AppointmentFilterContext } from 'src/context/AppointmentFilterContext';
import useLoadBookedTimes from '../../hooks/useLoadBookedTimes';
import useSessionStorageState from 'src/hooks/useSessionStorageState';
import { appointmentStep3State } from 'src/data/SessionStorageKeys';
import LoadingSpinner from 'src/assets/Pictogram/LoadingSpinner';
import DoctorStep3 from './components/DoctorStep3/DoctorStep3';
import SpecStep3 from './components/SpecStep3/SpecStep3';
import BackButton from './components/BackButton/BackButton';
import HomeButton from './components/HomeButton/HomeButton';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import en_gb from 'dayjs/locale/en-gb.js';
import updateLocale from 'dayjs/plugin/updateLocale';
import AppStep3Css from './AppStep3.module.css';

function AppStep3() {
    const [appParams, setAppParams] = useContext(AppointmentFilterContext);
    const [loading, setLoading] = useState(true);
    const [errorWhileLoading, setErrorWhileLoading] = useState(null);
    const [bookedData, setbookedData] = useState(null);
    const location = useLocation();
    const step3Data = useSessionStorageState(
        appointmentStep3State,
        location.state,
        location.state
    )[0];
    const showDoctorsPage = appParams.step3Format === 'Doctor';
    const doctorIds = step3Data?.docsAvailable?.map((doc) => doc.id).join(',');

    useLoadBookedTimes({
        bookedTimes: bookedData,
        setBookedTimes: setbookedData,
        doctorIds,
        setLoading,
        setError: setErrorWhileLoading,
    });

    dayjs.extend(updateLocale);
    dayjs.updateLocale('en-gb', { weekStart: 1 });
    dayjs.locale('en-gb');

    return (
        <div className={AppStep3Css.wrapper}>
            {loading ? (
                <LoadingSpinner />
            ) : errorWhileLoading ? (
                <div>{`Error while loading data: ${errorWhileLoading}`}</div>
            ) : (
                <>
                    <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        adapterLocale={en_gb}
                        dateLibInstance={dayjs.tz}
                    >
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
                            <HomeButton />
                        </div>
                    </LocalizationProvider>
                </>
            )}
        </div>
    );
}

export default AppStep3;
