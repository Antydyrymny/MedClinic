import { useOutletContext } from 'react-router-dom';
import AppStep1Css from './AppStep1.module.css';

function AppStep1() {
    const state = useOutletContext();
    return (
        <>
            <div className={AppStep1Css.test}>AppStep1</div>
            <div>{state}</div>
        </>
    );
}

export default AppStep1;
