import { useContext } from 'react';
import { AppointmentCurStepContext } from 'src/context/AppointmentCurStepContext';
import NavBlock from '../NavBlock/NavBlock';
import NavLine from '../NavLine/NavLine';
import DoneSvg from '/src/assets/Pictogram/DoneSvg';
import AppNavCss from './AppointmentNav.module.css';

function AppointmentNav() {
    const step = useContext(AppointmentCurStepContext);

    return (
        <div className={AppNavCss.wrapper}>
            <NavBlock
                to={'/app/step1'}
                label={'Choose Data'}
                color={'done'}
                number={step > 1 ? <DoneSvg /> : 1}
            />
            <NavLine color={step > 2 ? 'done' : step === 2 ? 'active' : 'empty'} />
            <NavBlock
                to={'/app/step2'}
                label={'Search Parameters'}
                color={step > 2 ? 'done' : step === 2 ? 'active' : 'empty'}
                number={step > 2 ? <DoneSvg /> : 2}
            />
            <NavLine color={step > 3 ? 'done' : step === 3 ? 'active' : 'empty'} />
            <NavBlock
                to={'/app/step3'}
                label={'Choose Time'}
                color={step > 3 ? 'done' : step === 3 ? 'active' : 'empty'}
                number={step > 3 ? <DoneSvg /> : 3}
            />
            <NavLine color={step < 4 ? 'empty' : 'active'} />
            <NavBlock
                to={'/app/step4'}
                label={'Confirm Appointment'}
                color={step < 4 ? 'empty' : 'active'}
                number={4}
            />
        </div>
    );
}

export default AppointmentNav;
