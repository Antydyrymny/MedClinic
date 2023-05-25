import { useState, useEffect } from 'react';

export default function useLocalStorageState(key, initialValue) {
    const [state, setState] = useState(() => {
        const data = JSON.parse(window.sessionStorage.getItem(key));
        return data !== null ? data : initialValue;
    });

    useEffect(() => {
        window.sessionStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState];
}
