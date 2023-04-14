import { useState, useEffect } from 'react';

export default function useLocalStorageState(key, initialValue) {
    const [state, setState] = useState(() => {
        const data = JSON.parse(window.localStorage.getItem(key));
        return data !== null ? data : initialValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState];
}
