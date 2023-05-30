import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavCss from './Nav.module.css';

function Nav() {
    const [scroll, setScroll] = useState('0px');
    useEffect(() => {
        function handleScroll() {
            setScroll(document.documentElement.scrollTop);
        }
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={NavCss.navigation}
            style={scroll > 100 ? { position: 'fixed', zIndex: 100 } : null}
        >
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

export default Nav;
