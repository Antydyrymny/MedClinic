import { useState, useContext, useMemo } from 'react';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import {
    DoctorsAllContext,
    SpecialitiesContext,
    ClinicsContext,
} from 'src/context/FetchDataContext';
import { ClientAppointmentsContext } from '../../context/MyProfileContext';
import { WindowWidth } from '../../context/WindowDimensionsContext';
import Modal from '../../components/Modal/Modal';
import MyAppRow from './components/MyAppRow';
import sortUp from '../../assets/Pictogram/sortUp.png';
import sortDown from '../../assets/Pictogram/sortDown.png';
import MyAppCss from './MyAppointments.module.css';

function MyAppointments() {
    const screenWidth = useContext(WindowWidth);
    const smallScreen = screenWidth <= 770;
    const doctors = useContext(DoctorsAllContext);
    const specialities = useContext(SpecialitiesContext);
    const clinics = useContext(ClinicsContext);
    const [apps, setApps] = useContext(ClientAppointmentsContext);

    const myDocs = doctors.filter((doc) => apps.map((app) => app.docId).includes(doc.id));
    const [sortedDescending, setSortedDescending] = useState(true);
    const appsExpanded = useMemo(
        () =>
            apps.map((app) => {
                const appDoc = myDocs.find((d) => d.id === app.docId);
                return {
                    ...app,
                    address: clinics.find((c) => c.id === app.clinicId).address,
                    speciality: specialities.find((s) => s.id === app.specialityId).name,
                    doctorName: appDoc.name,
                    doctorPhoto: appDoc.smallPhoto,
                };
            }),
        [apps, clinics, myDocs, specialities]
    );
    const appsSorted = useMemo(() => {
        if (sortedDescending) sortDescending(appsExpanded);
        else sortAscending(appsExpanded);
        return appsExpanded;
    }, [appsExpanded, sortedDescending]);

    const [isLoading, setIsLoading] = useState(false);
    const [updatingAppId, setUpdatingAppId] = useState(null);
    const [notification, setNotification] = useState(null);

    return (
        <div>
            <h1 className={MyAppCss.heading}>MyAppointments</h1>
            {smallScreen ? (
                <div className={MyAppCss.smallScreen}></div>
            ) : (
                <table className={MyAppCss.table}>
                    <thead>
                        <tr>
                            <th onClick={() => setSortedDescending(!sortedDescending)}>
                                <div className={MyAppCss.date}>
                                    {sortedDescending ? (
                                        <img src={sortDown} alt='sort ascending' />
                                    ) : (
                                        <img src={sortUp} alt='sort descending' />
                                    )}
                                    Date
                                </div>
                            </th>
                            <th>Doctor</th>
                            <th>Status</th>
                            <th className={MyAppCss.address}>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appsSorted.map((app) => (
                            <MyAppRow
                                key={app._id}
                                app={app}
                                cancelApp={() => cancelAppointment(app)}
                                updating={updatingAppId === app._id}
                                isLoading={isLoading}
                                notification={notification}
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );

    function sortDescending(arr) {
        arr.sort((a, b) => {
            if (
                dayjs(a.date).isBefore(dayjs(b.date)) ||
                (dayjs(a.date).isSame(dayjs(b.date)) && a.time < b.time)
            )
                return 1;
            else return -1;
        });
    }

    function sortAscending(arr) {
        arr.sort((a, b) => {
            if (
                dayjs(a.date).isAfter(dayjs(b.date)) ||
                (dayjs(a.date).isSame(dayjs(b.date)) && a.time > b.time)
            )
                return 1;
            else return -1;
        });
    }

    async function cancelAppointment(app) {
        try {
            setIsLoading(true);
            setUpdatingAppId(app._id);
            const serverURL = import.meta.env.VITE_SERVER_URL;
            const headers = new Headers();

            headers.append('Authorization', `Bearer ${Cookies.get('_auth')}`);
            headers.append('Content-Type', 'application/json');
            const response = await fetch(serverURL + 'api/cancelAppointment', {
                method: 'PATCH',
                headers: headers,
                body: JSON.stringify({
                    appointmentId: app.appointmentId,
                    date: app.date,
                    time: app.time,
                }),
            });

            const result = await response.json();
            if (response.status === 400) {
                showNotification(result.error);
            } else if (response.status === 200) {
                setApps(result.updatedAppointments);
                showNotification(result.message, 2000);
            }
        } catch (error) {
            showNotification('Error connecting to login server, try again later');
        }
    }

    function showNotification(message, duration = 3000) {
        setIsLoading(false);
        setNotification(message);
        setTimeout(() => {
            setNotification(null);
            setUpdatingAppId(null);
        }, duration);
    }
}

export default MyAppointments;
