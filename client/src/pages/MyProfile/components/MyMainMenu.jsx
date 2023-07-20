import { Link } from 'react-router-dom';
import SmallLogo from '../../NavigationBar/Logo/SmallLogo';
import CloseSmallColored from '../../../assets/Pictogram/CloseSmallColored';
import Button from '../../../components/Button/Button';
import MyAppsSvg from '../../../assets/Pictogram/MyAppsSvg';
import MyDocsSvg from '../../../assets/Pictogram/MyDocsSvg';
import MyExitSvg from '../../../assets/Pictogram/MyExitSvg';
import MyMainMenuCss from './MyMainMenu.module.css';

function MyMainMenu({ open, closeMenu, handleLogout, curActive, screenWidth }) {
    const smallScreen = screenWidth <= 1200;

    return (
        <div className={`${MyMainMenuCss.wrapper} ${open ? MyMainMenuCss.open : null}`}>
            <div className={MyMainMenuCss.logo}>
                <Link to={'/'}>
                    <SmallLogo fontSize='0.95rem' />
                </Link>
                {smallScreen && (
                    <div className={MyMainMenuCss.closeIcon} onClick={closeMenu}>
                        <CloseSmallColored color='#7367f0' />
                    </div>
                )}
            </div>
            <div className={MyMainMenuCss.button}>
                <Link to={'/app/step1'}>
                    <Button text={'Schedule'} customStyles={MyMainMenuCss} />
                </Link>
            </div>
            <div className={MyMainMenuCss.title}>MY PROFILE</div>
            <ul className={MyMainMenuCss.list}>
                <li
                    className={`${
                        curActive === 'MyAppointments' ? MyMainMenuCss.active : null
                    }`}
                >
                    <Link to={''}>
                        <div className={MyMainMenuCss.listSvg}>
                            <MyAppsSvg />
                        </div>
                        <span>My appointments</span>
                    </Link>
                </li>
                <li
                    className={`${
                        curActive === 'MyDoctors' ? MyMainMenuCss.active : null
                    }`}
                >
                    <Link to={'MyDoctors'}>
                        <div className={MyMainMenuCss.listSvg}>
                            <MyDocsSvg />
                        </div>
                        <span>My doctors</span>
                    </Link>
                </li>
                <li onClick={handleLogout}>
                    <div className={MyMainMenuCss.listSvg}>
                        <MyExitSvg />
                    </div>
                    <span>Leave</span>
                </li>
            </ul>
        </div>
    );
}

export default MyMainMenu;
