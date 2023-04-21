import { useState, useContext, useMemo, useEffect } from 'react';
import { AppointmentFilterContext } from 'src/context/AppointmentFilterContext';
import {
    DoctorsAllContext,
    SpecialitiesContext,
    ClinicsContext,
} from 'src/context/FetchDataContext';
import LoadingSpinner from 'src/assets/Pictogram/LoadingSpinner';
import App2ParamSelect from './components/App2ParamSelect/App2ParamSelect';
import App2Grid from './components/App2Grid/App2Grid';
import BackButton from './components/BackButton/BackButton';
import { doctorsFetched } from 'src/data/Doctors';
import { specialtiesFetched } from 'src/data/Specialties';
import { clinicsFetched } from 'src/data/Clinics';
import { expandDoctors } from 'src/utils/ExpandDoctors';
import { filterDoctors } from 'src/utils/FilterDoctors';
import { filterSpecialities } from 'src/utils/FilterSpecialities';
import { clearAppData } from 'src/utils/ClearAppData';
import AppStep2Css from './AppStep2.module.css';

function AppStep2() {
    const [appParams, setAppParams] = useContext(AppointmentFilterContext);
    const [doctors, setDoctors] = useContext(DoctorsAllContext);
    const [specialties, setSpecialties] = useContext(SpecialitiesContext);
    const [clinics, setClinics] = useContext(ClinicsContext);
    const [docSearch, setDocSearch] = useState('');
    const [specSearch, setSpecSearch] = useState('');
    // TODO fetch data
    useEffect(() => {
        if (!doctors) setDoctors(doctorsFetched);
        if (!specialties) setSpecialties(specialtiesFetched);
        if (!clinics) setClinics(clinicsFetched);
    });
    // Calculate and memo items to show
    const openedTab = appParams.openedTab;

    const docsExpanded = useMemo(
        () => expandDoctors(doctors, specialties, clinics),
        [doctors, specialties, clinics]
    );

    const docsFiltered = useMemo(() => {
        return filterDoctors(docsExpanded, { name: docSearch, ...appParams });
    }, [docsExpanded, appParams, docSearch]);

    const docsPerSpec = useMemo(() => {
        const specs = new Map();
        specialties.forEach((s) =>
            specs.set(
                s.name,
                filterDoctors(docsExpanded, { speciality: [s], ...appParams })
            )
        );
        return specs;
    }, [docsExpanded, appParams, specialties]);

    const specsFiltered = useMemo(
        () =>
            filterSpecialities(specialties, specSearch).filter(
                (spec) => docsPerSpec.get(spec.name).length
            ),
        [specialties, specSearch, docsPerSpec]
    );

    return (
        <div className={AppStep2Css.wrapper}>
            <App2ParamSelect
                openedTab={openedTab}
                onClick={openTab}
                docSearchProp={[docSearch, setDocSearch]}
                specSearchProp={[specSearch, setSpecSearch]}
            />
            <App2Grid
                openedTab={openedTab}
                docsFiltered={docsFiltered}
                specsFiltered={specsFiltered}
                docsPerSpec={docsPerSpec}
                onClick={handleParamChoice}
            />

            {/* <LoadingSpinner /> */}
            <div className={AppStep2Css.back}>
                <BackButton to={'app/step1'} />
            </div>
        </div>
    );

    function openTab(tabName) {
        clearAppData(appParams, setAppParams, 3);
        setAppParams((p) => ({ ...p, openedTab: tabName }));
    }

    function handleParamChoice(paramName, paramData) {
        clearAppData(appParams, setAppParams, 3);
        if (paramName === 'Doctor') setAppParams((p) => ({ ...p, doctorId: paramData }));
        else if (paramName === 'Speciality')
            setAppParams((p) => ({ ...p, specialityId: paramData }));
    }
}

export default AppStep2;
