import { useState, useEffect } from 'react';

export default function useGetScreenHeight() {
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        function handleHeightResize() {
            setScreenHeight(window.innerHeight);
        }
        window.addEventListener('resize', handleHeightResize);
        return () => window.removeEventListener('resize', handleHeightResize);
    }, []);

    return screenHeight;
}
