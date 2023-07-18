import { useEffect } from 'react';

export default function useLoadClinics({
    clinics,
    setClinics,
    setLoading,
    setError,
    loadCondition = !clinics,
}) {
    useEffect(() => {
        async function fetchData() {
            try {
                const serverURL = import.meta.env.VITE_SERVER_URL;
                const response = await fetch(serverURL + 'api/getClinics');
                if (!response.ok) {
                    throw new Error(
                        `Error connecting to server, response status: ${response.status}`
                    );
                }
                const result = await response.json();

                setClinics(result.clinics.sort((a, b) => a.id - b.id));
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        if (loadCondition) {
            fetchData();
        } else setLoading(false);
    }, []);
}
