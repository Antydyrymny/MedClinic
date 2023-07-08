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

                setDoctors(result.doctors);
                setClinics(result.clinics);
                setSpecialties(result.specialties);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        if (!doctors || !clinics || !specialties) {
            fetchData();
        } else setLoading(false);
    }, []);
}

// [
//     doctors,
//     setDoctors,
//     clinics,
//     setClinics,
//     specialties,
//     setSpecialties,
//     setLoading,
//     setError,
// ];
