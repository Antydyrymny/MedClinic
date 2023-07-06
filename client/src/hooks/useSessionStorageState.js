import { useState, useEffect } from 'react';

export default function useSessionStorageState(key, initialValue, updatingState) {
    const [state, setState] = useState(() => {
        const data = JSON.parse(window.sessionStorage.getItem(key));
        if (data === null) return updatingState || initialValue;
        else return updatingState || data;
    });

    useEffect(() => {
        window.sessionStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState];
}
