import { Link } from 'react-router-dom';
import HamburgerMenu from '../../../components/HamburgerMenu/HamburgerMenu';
import NavListCss from './NavList.module.css';

function NavList({ opened, close, onHamburgerClick, scrolling = false }) {
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
                    <Link
                        className={NavListCss.link}
                        to='/app/step1'
                        onClick={onLinkClick}
                    >
                        Make an appointment
                    </Link>
                </li>
                <li>
                    <Link className={NavListCss.link} to='/doctors' onClick={onLinkClick}>
                        Doctors
                    </Link>
                </li>
                <li>
                    <Link className={NavListCss.link} to='/about' onClick={onLinkClick}>
                        About us
                    </Link>
                </li>
                <li>
                    <Link
                        className={NavListCss.link}
                        to='/contacts'
                        onClick={onLinkClick}
                    >
                        Contacts
                    </Link>
                </li>
            </ul>
        </div>
    );

    function onLinkClick() {
        if (opened) close();
    }
}

export default NavList;
