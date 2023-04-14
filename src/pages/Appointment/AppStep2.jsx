import { useOutletContext } from 'react-router-dom';
import AppStep2Css from './AppStep2.module.css';

function AppStep2() {
    const state = useOutletContext();
    return (
        <>
            <div className={AppStep2Css.test}>AppStep2</div>
            <div>{state}</div>
        </>
    );
}

export default AppStep2;
