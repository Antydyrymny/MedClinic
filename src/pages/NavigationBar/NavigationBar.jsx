import { useState } from 'react';
import useGetScreenWidth from '../../hooks/useGetScreenWidth';
import useGetScroll from '../../hooks/useGetScroll';
import NavResponsiveComponent from './NavResponsiveComponent/NavResponsiveComponent';
import NavigationBarCss from './NavigationBar.module.css';

function NavigationBar() {
    const screenWidth = useGetScreenWidth();
    const scroll = useGetScroll();
    const [dropDownIsActive, setDropDownIsActive] = useState(false);
    const heightToShowFixedBar = screenWidth ? 50 : 120;

    return (
        <div className={NavigationBarCss.wrapper}>
            <div className={NavigationBarCss.navMain}>
                <NavResponsiveComponent
                    opened={scroll > heightToShowFixedBar ? false : dropDownIsActive}
                    setOpened={setDropDownIsActive}
                    screenSize={screenWidth > 1200 ? 'large' : 'small'}
                />
            </div>
            <div
                className={`${NavigationBarCss.navHidden} ${
                    scroll > heightToShowFixedBar ? NavigationBarCss.navScrolling : null
                }`}
            >
                <NavResponsiveComponent
                    scrolling={true}
                    opened={dropDownIsActive}
                    setOpened={setDropDownIsActive}
                    screenSize={screenWidth > 1200 ? 'large' : 'small'}
                />
            </div>
        </div>
    );
}

export default NavigationBar;
