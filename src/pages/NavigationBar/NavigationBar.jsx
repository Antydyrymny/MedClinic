import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import NavFirstBar from './NavFirstBar/NavFirstBar';
import NavigationBarCss from './NavigationBar.module.css';

function NavigationBar() {
    const [scroll, setScroll] = useState('0px');
    const [dropDownIsActive, setDropDownIsActive] = useState(false);
    const navigation = useRef(null);
    const screenWidth = window.innerWidth;
    const heightToShowFixedBar = screenWidth ? 50 : 120;

    useEffect(() => {
        function handleScroll() {
            setScroll(document.documentElement.scrollTop);
        }
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, []);

    useLayoutEffect(() => {
        function outOfBorder(e) {
            if (navigation.current && dropDownIsActive) {
                const bottom = navigation.current.getBoundingClientRect().bottom;
                console.log(
                    bottom,
                    e.clientY,
                    navigation.current.getBoundingClientRect()
                );
                if (e.clientY > bottom) {
                    setDropDownIsActive(false);
                }
            }
        }

        if (dropDownIsActive && navigation.current) {
            document.body.addEventListener('pointerdown', outOfBorder);
            document.body.addEventListener('touchend', outOfBorder);
            // document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.removeEventListener('pointerdown', outOfBorder);
            document.body.removeEventListener('touchend', outOfBorder);
            // document.body.style.overflow = 'visible';
        };
    }, [dropDownIsActive]);

    return (
        <div className={NavigationBarCss.wrapper}>
            <div className={NavigationBarCss.navMain}>
                <NavFirstBar
                    opened={dropDownIsActive}
                    onHamburgerClick={() => setDropDownIsActive(!dropDownIsActive)}
                    dropDownref={navigation}
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
                    onHamburgerClick={() => setDropDownIsActive(!dropDownIsActive)}
                    dropDownref={navigation}
                />
            </div>
        </div>
    );
}

export default NavigationBar;
