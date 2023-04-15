import { useContext } from 'react';
import { AppointmentFilterContext } from 'src/context/AppointmentFilterContext';
import AppStep1Css from './AppStep1.module.css';

function AppStep1() {
    const state = useContext(AppointmentFilterContext);
    return (
        <>
            <div className={AppStep1Css.test}>AppStep1</div>
        </>
    );
}

export default AppStep1;
