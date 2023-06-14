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
        <footer className={FooterCss.wrapper}>
            <hr className={FooterCss.line} />
            <div
                className={`${FooterCss.content} ${
                    onThePageWithBottomBar && FooterCss.withBottomBar
                }`}
            >
                <div className={FooterCss.infoBlock}>
                    <div className={FooterCss.info}>
                        Project by
                        <a href='https://www.google.com' className={FooterCss.name}>
                            {` Danovich Konstantin`}
                        </a>
                    </div>
                    <div className={FooterCss.info}>Design by LahtaClinic</div>
                </div>
                <div className={FooterCss.socialMedia}>
                    <SocialMedia
                        personal={true}
                        horizontal={true}
                        heading='Find me on:'
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
