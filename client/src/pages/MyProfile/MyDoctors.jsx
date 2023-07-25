import { useContext } from 'react';
import {
    DoctorsAllContext,
    SpecialitiesContext,
    ClinicsContext,
} from 'src/context/FetchDataContext';
import { ClientAppointmentsContext } from '../../context/MyProfileContext';
import { WindowWidth } from '../../context/WindowDimensionsContext';
import MyDocRow from './components/MyDocRow';
import MyDocCard from './components/MyDocCard';
import MyAppCss from './MyAppointments.module.css';
import MyDocsCss from './MyDoctors.module.css';

function MyDoctors() {
    const screenWidth = useContext(WindowWidth);
    const smallScreen = screenWidth <= 660;

    const doctors = useContext(DoctorsAllContext);
    const specialities = useContext(SpecialitiesContext);
    const clinics = useContext(ClinicsContext);
    const apps = useContext(ClientAppointmentsContext)[0];

    const myDocs = doctors.filter((doc) => apps.map((app) => app.docId).includes(doc.id));
    const docsExpanded = myDocs.map((doc) => ({
        id: doc.id,
        name: doc.name,
        photo: doc.smallPhoto,
        speciality: specialities
            .filter((spec) => doc.specialtyId.includes(spec.id))
            .map((spec) => spec.name),
        clinic: clinics.find((clinic) => {
            const clinicIdFromLastVisit = apps.find(
                (app) => app.docId === doc.id
            ).clinicId;
            return clinic.id === clinicIdFromLastVisit;
        }).address,
    }));

    return (
        <div>
            <h1 className={MyAppCss.heading}>My doctors</h1>
            {!docsExpanded.length ? (
                <div className={MyAppCss.noEntries}>No doctors here yet</div>
            ) : smallScreen ? (
                <div className={MyAppCss.smallScreen}>
                    {docsExpanded.map((doc) => (
                        <MyDocCard key={doc.id} doctor={doc} />
                    ))}
                </div>
            ) : (
                <table className={MyAppCss.table}>
                    <colgroup>
                        <col className={MyDocsCss.col1} span={'1'} />
                        <col className={MyDocsCss.col2} span={'1'} />
                        <col className={MyDocsCss.col3} span={'1'} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>Doctor</th>
                            <th className={MyAppCss.address}>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {docsExpanded.map((doc) => (
                            <MyDocRow key={doc.id} doctor={doc} />
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default MyDoctors;
