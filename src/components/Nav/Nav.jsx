import { Link } from 'react-router-dom';
import NavCss from './Nav.module.css';

function Nav() {
    return (
        <nav className={NavCss.navigation}>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/app'>Make an appointment</Link>
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

export default Nav;
