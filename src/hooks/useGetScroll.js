import { useState, useEffect } from 'react';

export default function useGetScroll() {
    const [currentScroll, setCurrentScroll] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setCurrentScroll(document.documentElement.scrollTop);
        }
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, []);

    return currentScroll;
}
