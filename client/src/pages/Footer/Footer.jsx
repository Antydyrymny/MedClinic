import useGetScreenWidth from '../../hooks/useGetScreenWidth';
import SocialMedia from '../NavigationBar/NavDropDown/SocialMedia';
import FooterCss from './Footer.module.css';

function Footer({ fixed = false }) {
    const screenWidth = useGetScreenWidth();

    return (
        <footer className={`${fixed ? FooterCss.fixedWrapper : FooterCss.wrapper}`}>
            <hr className={FooterCss.line} />
            <div
                className={`${FooterCss.content} ${
                    screenWidth <= 1200 ? FooterCss.withBottomBar : null
                }`}
            >
                <div className={FooterCss.infoBlock}>
                    <div className={FooterCss.info}>
                        Project by
                        <a
                            href='https://konstantindanovich.vercel.app/'
                            className={FooterCss.name}
                        >
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
