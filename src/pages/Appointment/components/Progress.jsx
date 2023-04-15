import AppointmentNav from './AppointmentNav';
import ProgressBar from './ProgressBar';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useLocalStorageState from 'src/hooks/useLocalStorageState';
import { previousPage } from 'src/data/LocalStorageKeys';
import { AppointmentCurStepContext } from 'src/context/AppointmentCurStepContext';
import ProgressCss from './Progress.module.css';

function Progress() {
    const location = useLocation();
    const currentStep = +location.pathname.at(-1);
    const [prevStep, setPrevStep] = useLocalStorageState(previousPage, 1);

    useEffect(() => {
        setPrevStep(currentStep);
    }, [currentStep, setPrevStep]);

    return (
        <div className={ProgressCss.wrapper}>
            <AppointmentCurStepContext.Provider value={prevStep}>
                <AppointmentNav />
                <ProgressBar />
            </AppointmentCurStepContext.Provider>
        </div>
    );
}

export default Progress;
