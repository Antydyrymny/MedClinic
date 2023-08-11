import { useState, useEffect } from 'react';
import { throttle } from '../utils/throttle';

export default function useGetScreenHeight() {
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        function handleHeightResize() {
            setScreenHeight(window.innerHeight);
        }
        const handleHeightResizeThrottled = throttle(handleHeightResize, 100);

        window.addEventListener('resize', handleHeightResizeThrottled);
        return () => window.removeEventListener('resize', handleHeightResizeThrottled);
    }, []);

    return screenHeight;
}
