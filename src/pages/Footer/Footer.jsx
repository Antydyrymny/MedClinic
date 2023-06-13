import { useLocation } from 'react-router-dom';
import SocialMedia from '../NavigationBar/NavDropDown/SocialMedia';
import FooterCss from './Footer.module.css';

function Footer() {
    const location = useLocation();
    const onThePageWithBottomBar =
        location.pathname === '/about' ||
        location.pathname === '/services' ||
        location.pathname === '/for_business' ||
        location.pathname === '/partners';

    return (
        <div
            className={`${FooterCss.wrapper} ${
                onThePageWithBottomBar && FooterCss.withBottomBar
            }`}
        >
            <SocialMedia personal={true} heading='Follow me on' />
        </div>
    );
}

export default Footer;
