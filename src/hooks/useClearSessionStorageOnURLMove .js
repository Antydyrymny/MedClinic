import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useClearSessionStorageOnURLMove(keys, from) {
    const location = useLocation();

    useEffect(() => {
        if (!location.pathname.startsWith(from))
            keys.forEach((key) => sessionStorage.removeItem(key));
    }, [location, keys, from]);
}
