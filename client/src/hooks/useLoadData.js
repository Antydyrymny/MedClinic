import { useEffect } from 'react';

export default function useLoadData({ functionsArray, loadCondition, setIsLoading }) {
    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            await Promise.all(functionsArray.map((fn) => fn()));
            setIsLoading(false);
        }

        if (loadCondition) fetchData();
    }, []);
}
