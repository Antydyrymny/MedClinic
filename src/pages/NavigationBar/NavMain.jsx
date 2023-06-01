import { Link } from 'react-router-dom';
import Logo from './logo/Logo';
import SmallLogo from './logo/SmallLogo';
import NavMainCss from './NavMain.module.css';

function NavMain() {
    return (
        <nav className={NavMainCss.navMain}>
            <Logo />
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/app/step1'>Make an appointment</Link>
                </li>
                <li>
                    <Link to='/doctors'>Doctors</Link>
                </li>
                <li>
                    <Link to='/services'>Services</Link>
                </li>
                <li>
                    <Link to='/about'>About us</Link>
                </li>
                <li>
                    <Link to='/contacts'>Contacts</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavMain;
