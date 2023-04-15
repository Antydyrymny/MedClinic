import { useState, useEffect } from 'react';

export default function useInformOfPageRefresh() {
    const [wasRefreshed, setWasRefreshed] = useState(false);
    useEffect(() => {
        const observer = new PerformanceObserver((list) => {
            const entry = list.getEntries().at(-1);
            if (entry.type === 'reload') {
                setWasRefreshed(true);
            } else setWasRefreshed(false);
        });

        observer.observe({ type: 'navigation', buffered: true });

        return () => {
            observer.disconnect();
        };
    }, []);

    return [wasRefreshed, setWasRefreshed];
}
