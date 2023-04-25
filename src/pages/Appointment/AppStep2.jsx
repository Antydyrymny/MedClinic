import { useState, useContext, useMemo, useEffect } from 'react';
import { AppointmentFilterContext } from 'src/context/AppointmentFilterContext';
import {
    DoctorsAllContext,
    SpecialitiesContext,
    ClinicsContext,
} from 'src/context/FetchDataContext';
import { appointmentStep3State } from 'src/data/LocalStorageKeys';
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
    const [loading, setLoading] = useState(true);
    const [doctors, setDoctors] = useContext(DoctorsAllContext);
    const [specialties, setSpecialties] = useContext(SpecialitiesContext);
    const [clinics, setClinics] = useContext(ClinicsContext);
    const [docSearch, setDocSearch] = useState('');
    const [specSearch, setSpecSearch] = useState('');
    // TODO fetch data
    useEffect(() => {
        if (!doctors)
            setDoctors(
                doctorsFetched.slice().sort((a, b) => {
                    if (a.name > b.name) return 1;
                    else return -1;
                })
            );
        if (!specialties)
            setSpecialties(
                specialtiesFetched.slice().sort((a, b) => {
                    if (a.name > b.name) return 1;
                    else return -1;
                })
            );
        if (!clinics)
            setClinics(
                clinicsFetched.slice().sort((a, b) => {
                    if (a.name > b.name) return 1;
                    else return -1;
                })
            );
        setLoading(false);
    }, [clinics, doctors, setClinics, setDoctors, setSpecialties, specialties]);
    // Calculate and memo items to show
    const openedTab = appParams.openedTab;

    const docsExpanded = useMemo(
        () => (loading ? null : expandDoctors(doctors, specialties, clinics)),
        [loading, doctors, specialties, clinics]
    );

    const docsFiltered = useMemo(
        () =>
            loading
                ? null
                : filterDoctors(docsExpanded, { name: docSearch, ...appParams }),
        [loading, docsExpanded, appParams, docSearch]
    );

    const docsPerSpec = useMemo(() => {
        if (loading) return;
        const specs = new Map();
        specialties.forEach((s) =>
            specs.set(
                s.name,
                filterDoctors(docsExpanded, { speciality: [s], ...appParams })
            )
        );
        return specs;
    }, [loading, docsExpanded, appParams, specialties]);

    const specsFiltered = useMemo(
        () =>
            loading
                ? null
                : filterSpecialities(specialties, specSearch).filter(
                      (spec) => docsPerSpec.get(spec.name).length
                  ),
        [loading, specialties, specSearch, docsPerSpec]
    );

    return (
        <div className={AppStep2Css.wrapper}>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
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
                        setAppParams={setAppParams}
                    />
                    <div className={AppStep2Css.back}>
                        <BackButton to={'app/step1'} />
                    </div>
                </>
            )}
        </div>
    );

    function openTab(tabName) {
        setAppParams({ ...appParams, openedTab: tabName });
    }

    function handleParamChoice(paramName, paramData) {
        clearAppData(appParams, setAppParams, 3);
        localStorage.removeItem(appointmentStep3State);
        if (paramName === 'Doctor') setAppParams((p) => ({ ...p, doctorId: paramData }));
        else if (paramName === 'Speciality')
            setAppParams((p) => ({ ...p, specialityId: paramData }));
    }
}

export default AppStep2;
