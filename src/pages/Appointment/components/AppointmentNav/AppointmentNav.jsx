import { useContext } from 'react';
import { AppointmentCurStepContext } from 'src/context/AppointmentCurStepContext';
import NavBlock from '../NavBlock/NavBlock';
import HorizontalLine from 'src/components/HorizontalLine/HorizontalLine';
import DoneSvg from '/src/assets/Pictogram/DoneSvg';
import AppNavCss from './AppointmentNav.module.css';

function AppointmentNav({ permitStep3, permitStep4 }) {
    const step = useContext(AppointmentCurStepContext);

    return (
        <div className={AppNavCss.wrapper}>
            <NavBlock
                to={'/app/step1'}
                label={'Choose Data'}
                color={'done'}
                number={step > 1 ? <DoneSvg /> : 1}
            />
            <HorizontalLine color={step > 2 ? 'done' : step === 2 ? 'active' : 'empty'} />
            <NavBlock
                to={'/app/step2'}
                label={'Search Parameters'}
                color={step > 2 ? 'done' : step === 2 ? 'active' : 'empty'}
                number={step > 2 ? <DoneSvg /> : 2}
            />
            <HorizontalLine color={step > 3 ? 'done' : step === 3 ? 'active' : 'empty'} />
            <NavBlock
                to={permitStep3 ? '/app/step3' : null}
                label={'Choose Time'}
                color={step > 3 ? 'done' : step === 3 ? 'active' : 'empty'}
                number={step > 3 ? <DoneSvg /> : 3}
            />
            <HorizontalLine color={step < 4 ? 'empty' : 'active'} />
            <NavBlock
                to={permitStep4 ? '/app/step4' : null}
                label={'Confirm Appointment'}
                color={step < 4 ? 'empty' : 'active'}
                number={4}
            />
        </div>
    );
}

export default AppointmentNav;
