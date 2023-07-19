import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WindowWidth } from '../../../context/WindowDimensionsContext';
import SmallLogo from '../../NavigationBar/Logo/SmallLogo';
import Button from '../../../components/Button/Button';
import MyMainMenuCss from './MyMainMenu.module.css';

function MyMainMenu({ open, toogleMenu, handleLogout }) {
    const screenWidth = useContext(WindowWidth);

    return (
        <div className={`${MyMainMenuCss.wrapper} ${open ? MyMainMenuCss.open : null}`}>
            <div className={MyMainMenuCss.logo}>
                <SmallLogo />
            </div>
            <div className={MyMainMenuCss.button}>
                <Link to={'/app/step1'}>
                    <Button text={'Schedule'} customStyles={MyMainMenuCss} />
                </Link>
            </div>
            <div className={MyMainMenuCss.title}>MY PROFILE</div>
            <ul className={MyMainMenuCss.list}>
                <li>My appointments</li>
                <li>My doctors</li>
                <li>Leave</li>
            </ul>
        </div>
    );
}

export default MyMainMenu;
