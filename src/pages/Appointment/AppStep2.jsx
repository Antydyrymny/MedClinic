import { useContext } from 'react';
import { AppointmentFilterContext } from 'src/context/AppointmentFilterContext';
import AppStep2Css from './AppStep2.module.css';

function AppStep2() {
    const state = useContext(AppointmentFilterContext);
    return (
        <>
            <div className={AppStep2Css.test}>AppStep2</div>
            <div></div>
        </>
    );
}

export default AppStep2;
