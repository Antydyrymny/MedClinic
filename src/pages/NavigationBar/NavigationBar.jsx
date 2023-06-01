import { useState, useEffect } from 'react';
import NavMain from './NavMain';
import NavigationBarCss from './NavigationBar.module.css';

function NavigationBar() {
    const [scroll, setScroll] = useState('0px');
    useEffect(() => {
        function handleScroll() {
            setScroll(document.documentElement.scrollTop);
        }
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={NavigationBarCss.navMain}>
                <NavMain />
            </div>
            <div
                className={`${NavigationBarCss.navHidden} ${
                    scroll > 120 ? NavigationBarCss.navFixed : null
                }`}
            >
                <NavMain />
            </div>
        </>
    );
}

export default NavigationBar;
