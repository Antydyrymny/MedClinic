import { useState, useEffect } from 'react';
import { throttle } from '../utils/throttle';

export default function useGetScroll() {
    const [currentScroll, setCurrentScroll] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setCurrentScroll(document.documentElement.scrollTop);
        }
        const handleScrollThrottled = throttle(handleScroll, 100);
        document.addEventListener('scroll', handleScrollThrottled);
        return () => document.removeEventListener('scroll', handleScrollThrottled);
    }, []);

    return currentScroll;
}
