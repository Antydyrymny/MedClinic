import useLocalStorageState from 'src/hooks/useLocalStorageState';
import { Outlet, Link } from 'react-router-dom';
import { appointmentKey } from 'src/data/LocalStorageKeys';
import AppointLayoutCss from './AppointmentLayout.module.css';

function AppointmentLayout() {
    const [state, setState] = useLocalStorageState(appointmentKey, { count: 0 });

    return (
        <>
            <div>Appointment</div>
            <div>{state.count}</div>
            <button onClick={() => setState({ ...state, count: state.count + 1 })}>
                Increment
            </button>
            <br />
            <Link to={'/app/step1'}>Step1</Link>
            <br />
            <Link to={'/app/step2'}>Step2</Link>
            <Outlet context={state.count} />
        </>
    );
}

export default AppointmentLayout;
