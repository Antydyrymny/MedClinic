import { useState, useContext } from 'react';
import { WindowWidth, DocumentScroll } from '../../context/WindowDimensionsContext';
import NavBreadCrumbs from './NavBreadCrumbs';
import NavResponsiveComponent from './NavResponsiveComponent/NavResponsiveComponent';
import NavigationBarCss from './NavigationBar.module.css';

function NavigationBar() {
    const screenWidth = useContext(WindowWidth);
    const scroll = useContext(DocumentScroll);
    const [dropDownIsActive, setDropDownIsActive] = useState(false);
    const heightToShowFixedBar = screenWidth ? 50 : 120;
    const screenSize = screenWidth > 1200 ? 'large' : 'small';

    return (
        <div className={NavigationBarCss.wrapper}>
            <div className={NavigationBarCss.navMain}>
                <NavResponsiveComponent
                    opened={scroll > heightToShowFixedBar ? false : dropDownIsActive}
                    setOpened={setDropDownIsActive}
                    screenSize={screenSize}
                />
            </div>
            {scroll <= heightToShowFixedBar && !dropDownIsActive && (
                <NavBreadCrumbs screenSize={screenSize} />
            )}
            <div
                className={`${NavigationBarCss.navHidden} ${
                    scroll > heightToShowFixedBar ? NavigationBarCss.navScrolling : null
                }`}
            >
                <NavResponsiveComponent
                    scrolling={true}
                    opened={dropDownIsActive}
                    setOpened={setDropDownIsActive}
                    screenSize={screenSize}
                />
            </div>
        </div>
    );
}

export default NavigationBar;
