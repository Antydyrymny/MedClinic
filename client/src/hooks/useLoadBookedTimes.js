import { useEffect } from 'react';

export default function useLoadBookedTimes({
    bookedTimes,
    doctorIds,
    setBookedTimes,
    setLoading,
    setError,
    loadCondition = doctorIds && !bookedTimes,
}) {
    useEffect(() => {
        async function fetchData() {
            try {
                const serverURL = import.meta.env.VITE_SERVER_URL;
                const response = await fetch(
                    serverURL + 'api/getBookedTimes?docIds=' + doctorIds
                );
                if (!response.ok) {
                    throw new Error(
                        `Error connecting to server, response status: ${response.status}`
                    );
                }
                const result = await response.json();

                setBookedTimes(result.bookedTimes);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        if (loadCondition) {
            fetchData();
        } else setLoading(false);
    }, [doctorIds, loadCondition, setBookedTimes, setError, setLoading]);
}
