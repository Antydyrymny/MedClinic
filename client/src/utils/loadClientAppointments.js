import Cookies from 'js-cookie';

export async function loadClientAppointments({
    setClientAppointments,
    setErrorWhileLoading,
}) {
    try {
        const serverURL = import.meta.env.VITE_SERVER_URL;
        const response = await fetch(serverURL + 'api/getClientApps', {
            method: 'GET',
            headers: { Authorization: `Bearer ${Cookies.get('_auth')}` },
        });
        if (!response.ok) {
            throw new Error(
                `Error connecting to server, response status: ${response.status}`
            );
        }
        const result = await response.json();

        setClientAppointments(result.appointments);
    } catch (error) {
        setErrorWhileLoading(error);
    }
}
