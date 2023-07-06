import { useState, useEffect } from 'react';

export default function useGetScreenWidth() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleWidthResize() {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleWidthResize);
        return () => window.removeEventListener('resize', handleWidthResize);
    }, []);

    return screenWidth;
}
