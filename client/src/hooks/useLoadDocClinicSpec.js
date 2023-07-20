import { useEffect } from 'react';

export default function useLoadDocClinicSpec({
    doctors,
    setDoctors,
    clinics,
    setClinics,
    specialties,
    setSpecialties,
    setLoading,
    setError,
    loadCondition = !doctors || !clinics || !specialties,
}) {
    useEffect(() => {
        async function fetchData() {
            try {
                const serverURL = import.meta.env.VITE_SERVER_URL;
                const response = await fetch(serverURL + 'api/getDocClinicSpec');
                if (!response.ok) {
                    throw new Error(
                        `Error connecting to server, response status: ${response.status}`
                    );
                }
                const result = await response.json();

                setDoctors(
                    result.doctors.sort((a, b) => {
                        if (a.name > b.name) return 1;
                        else return -1;
                    })
                );
                setClinics(result.clinics.sort((a, b) => a.id - b.id));
                setSpecialties(
                    result.specialties.sort((a, b) => {
                        if (a.name > b.name) return 1;
                        else return -1;
                    })
                );
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        if (loadCondition) {
            fetchData();
        } else setLoading(false);
    }, [loadCondition, setClinics, setDoctors, setError, setLoading, setSpecialties]);
}
