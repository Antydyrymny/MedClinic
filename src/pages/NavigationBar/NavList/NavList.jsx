import { Link } from 'react-router-dom';
import HamburgerMenu from '../../../components/HamburgerMenu/HamburgerMenu';
import NavListCss from './NavList.module.css';

function NavList({ opened, onHamburgerClick, scrolling = false }) {
    return (
        <div className={NavListCss.wrapper}>
            <div className={NavListCss.hamburger}>
                <HamburgerMenu opened={opened} onClick={onHamburgerClick} />
            </div>
            <ul
                className={`${NavListCss.list} ${
                    scrolling ? NavListCss.scrollingList : null
                }`}
            >
                <li>
                    <Link className={NavListCss.link} to='/app/step1'>
                        Make an appointment
                    </Link>
                </li>
                <li>
                    <Link className={NavListCss.link} to='/doctors'>
                        Doctors
                    </Link>
                </li>
                <li>
                    <Link className={NavListCss.link} to='/about'>
                        About us
                    </Link>
                </li>
                <li>
                    <Link className={NavListCss.link} to='/contacts'>
                        Contacts
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavList;
