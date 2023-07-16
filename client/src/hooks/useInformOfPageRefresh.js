import { useState, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useSessionStorageState from './useSessionStorageState';
import { prevPageKey } from '../data/SessionStorageKeys';

export default function useInformOfPageRefresh() {
    const [wasRefreshed, setWasRefreshed] = useState(false);

    const [prevPage, setPrevPage] = useSessionStorageState(prevPageKey, null);
    const location = useLocation();
    useLayoutEffect(() => {
        window.onbeforeunload = function () {
            setPrevPage({ location: location.pathname, time: Date.now() });
        };
        return () => {
            window.onbeforeunload = null;
        };
    }, [location.pathname, setPrevPage]);

    useLayoutEffect(() => {
        const curPath = location.pathname;
        if (
            prevPage &&
            prevPage.location === curPath &&
            Date.now() - prevPage.time < 1000
        ) {
            setWasRefreshed(true);
        }
    }, [location.pathname, prevPage]);

    // useEffect(() => {
    //     const observer = new PerformanceObserver((list) => {
    //         const entry = list.getEntries().at(-1);
    //         if (entry.type === 'reload') {
    //             setWasRefreshed(true);
    //         } else setWasRefreshed(false);
    //     });

    //     observer.observe({ type: 'navigation', buffered: true });

    //     return () => {
    //         observer.disconnect();
    //     };
    // }, []);

    return [wasRefreshed, setWasRefreshed];
}
