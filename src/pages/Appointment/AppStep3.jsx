import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AppointmentFilterContext } from 'src/context/AppointmentFilterContext';
import {
    DoctorsAllContext,
    SpecialitiesContext,
    ClinicsContext,
} from 'src/context/FetchDataContext';
import { expandDoctors } from 'src/utils/ExpandDoctors';
import { filterDoctors } from 'src/utils/FilterDoctors';
import AppStep3Css from './AppStep3.module.css';

function AppStep3() {
    const [appParams, setAppParams] = useContext(AppointmentFilterContext);
    const [doctors, setDoctors] = useContext(DoctorsAllContext);
    const [specialties, setSpecialties] = useContext(SpecialitiesContext);
    const [clinics, setClinics] = useContext(ClinicsContext);
    const location = useLocation();
    const showDoctorsPage = !!appParams.doctorId;
    let step3Data = null;
    if (!location.state) {
        // If no state in localStorage page will be redirected by hook in AppointmentLayout
        if (!doctors || (!appParams.doctorId && !appParams.specialityId)) return null;
        // if no state in navigator link - recalculate data
        else if (showDoctorsPage) {
            const doctor = doctors.find((doc) => doc.id === appParams.doctorId);
            step3Data = { docsAvailable: expandDoctors([doctor], specialties, clinics) };
        } else {
            const docsExpanded = expandDoctors(doctors, specialties, clinics);
            const spec = specialties.find((s) => s.id === appParams.specialityId);
            const docsBySpec = filterDoctors(docsExpanded, {
                ...appParams,
                speciality: [spec],
            });
            const lowestPrice = docsBySpec.reduce(
                (price, doc) => Math.min(price, doc.price),
                Infinity
            );
            step3Data = {
                specName: spec.name,
                docsAvailable: docsBySpec,
                price: lowestPrice,
            };
        }
    } else step3Data = location.state;

    return (
        <div className={AppStep3Css.test}>
            {step3Data.docsAvailable.map((d) => (
                <div key={d.id}>{d.name}</div>
            ))}
        </div>
    );
}

export default AppStep3;
