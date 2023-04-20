import AppointmentNav from '../AppointmentNav/AppointmentNav';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useEffect } from 'react';
import useLocalStorageState from 'src/hooks/useLocalStorageState';
import { previousPageKey } from 'src/data/LocalStorageKeys';
import { AppointmentCurStepContext } from 'src/context/AppointmentCurStepContext';
import ProgressCss from './Progress.module.css';

function Progress({ currentStep, permitStep3, permitStep4 }) {
    const [prevStep, setPrevStep] = useLocalStorageState(previousPageKey, 1);

    useEffect(() => {
        setPrevStep(currentStep);
    }, [currentStep, setPrevStep]);

    return (
        <div className={ProgressCss.wrapper}>
            <AppointmentCurStepContext.Provider value={prevStep}>
                <AppointmentNav permitStep3={permitStep3} permitStep4={permitStep4} />
                <ProgressBar />
            </AppointmentCurStepContext.Provider>
        </div>
    );
}

export default Progress;
