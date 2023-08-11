import { useState, useEffect } from 'react';
import { throttle } from '../utils/throttle';

export default function useGetScreenWidth() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleWidthResize() {
            setScreenWidth(window.innerWidth);
        }
        const handleWidthResizeThrottled = throttle(handleWidthResize, 100);
        window.addEventListener('resize', handleWidthResizeThrottled);
        return () => window.removeEventListener('resize', handleWidthResizeThrottled);
    }, []);

    return screenWidth;
}
