import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useClearLocalStorageOnURLMove(key, from) {
    const location = useLocation();

    useEffect(() => {
        if (!location.pathname.startsWith(from)) localStorage.removeItem(key);
    }, [location, key, from]);
}
