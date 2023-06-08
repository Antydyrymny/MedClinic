import { useState, useEffect } from 'react';
import NavFirstBar from './NavFirstBar/NavFirstBar';
import NavigationBarCss from './NavigationBar.module.css';

function NavigationBar() {
    const [scroll, setScroll] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [dropDownIsActive, setDropDownIsActive] = useState(false);
    const heightToShowFixedBar = screenWidth ? 50 : 120;

    useEffect(() => {
        function handleScroll() {
            setScroll(document.documentElement.scrollTop);
        }

        function handleResize() {
            setScreenWidth(window.innerWidth);
        }

        document.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={NavigationBarCss.wrapper}>
            <div className={NavigationBarCss.navMain}>
                <NavFirstBar
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
                <NavFirstBar
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
