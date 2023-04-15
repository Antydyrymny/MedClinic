import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useClearLocalStorageOnURLMove(keys, from) {
    const location = useLocation();

    useEffect(() => {
        if (!location.pathname.startsWith(from))
            keys.forEach((key) => localStorage.removeItem(key));
    }, [location, keys, from]);
}
