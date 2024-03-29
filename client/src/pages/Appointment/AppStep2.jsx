import { useState, useContext, useMemo } from 'react';
import useLoadDocClinicSpec from '../../hooks/useLoadDocClinicSpec';
import { AppointmentFilterContext } from 'src/context/AppointmentFilterContext';
import {
    DoctorsAllContext,
    SpecialitiesContext,
    ClinicsContext,
} from 'src/context/FetchDataContext';
import { appointmentStep3State } from 'src/data/SessionStorageKeys';
import LoadingSpinner from 'src/assets/Pictogram/LoadingSpinner';
import App2ParamSelect from './components/App2ParamSelect/App2ParamSelect';
import App2Grid from './components/App2Grid/App2Grid';
import BackButton from './components/BackButton/BackButton';
import HomeButton from './components/HomeButton/HomeButton';
import { expandDoctors } from 'src/utils/expandDoctors';
import { filterDoctors } from 'src/utils/filterDoctors';
import { filterSpecialities } from 'src/utils/filterSpecialities';
import { clearAppData } from 'src/utils/clearAppData';
import AppStep2Css from './AppStep2.module.css';

function AppStep2() {
    const [appParams, setAppParams] = useContext(AppointmentFilterContext);
    const [loading, setLoading] = useState(true);
    const [errorWhileLoading, setErrorWhileLoading] = useState(null);
    const [doctors, setDoctors] = useContext(DoctorsAllContext);
    const [specialties, setSpecialties] = useContext(SpecialitiesContext);
    const [clinics, setClinics] = useContext(ClinicsContext);
    const [docSearch, setDocSearch] = useState('');
    const [specSearch, setSpecSearch] = useState('');

    useLoadDocClinicSpec({
        doctors,
        setDoctors,
        clinics,
        setClinics,
        specialties,
        setSpecialties,
        setLoading,
        setError: setErrorWhileLoading,
    });

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
            ) : errorWhileLoading ? (
                <div>{`Error while loading data: ${errorWhileLoading}`}</div>
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
                        appParams={appParams}
                        setAppParams={setAppParams}
                    />
                    <div className={AppStep2Css.back}>
                        <BackButton to={'/app/step1'} />
                        <HomeButton />
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
        sessionStorage.removeItem(appointmentStep3State);
        if (paramName === 'Doctor')
            setAppParams((p) => ({ ...p, doctorId: paramData, step3Format: 'Doctor' }));
        else if (paramName === 'Speciality')
            setAppParams((p) => ({
                ...p,
                specialityId: paramData,
                doctorId: null,
                step3Format: 'Speciality',
            }));
    }
}

export default AppStep2;
