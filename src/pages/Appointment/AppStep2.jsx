import { useState, useContext, useMemo } from 'react';
import { AppointmentFilterContext } from 'src/context/AppointmentFilterContext';
import Loader from 'src/assets/Pictogram/Loader';
import App2ParamSelect from './components/App2ParamSelect/App2ParamSelect';
import App2Grid from './components/App2Grid/App2Grid';
import { doctors } from 'src/data/Doctors';
import { specialties } from 'src/data/Specialties';
import { clinics } from 'src/data/Clinics';
import { expandDoctors } from 'src/utils/ExpandDoctors';
import { filterDoctors } from 'src/utils/FilterDoctors';
import { filterSpecialities } from 'src/utils/FilterSpecialities';
import AppStep2Css from './AppStep2.module.css';

function AppStep2() {
    const [appParams, setAppParams] = useContext(AppointmentFilterContext);
    const [docSearch, setDocSearch] = useState('');
    const [specSearch, setSpecSearch] = useState('');
    // Calculate and memo items to show
    const openedTab = appParams.openedTab;
    const docsExpanded = useMemo(() => expandDoctors(doctors, specialties, clinics), []);
    const docsFiltered = useMemo(() => {
        return filterDoctors(docsExpanded, { name: docSearch, ...appParams });
    }, [docsExpanded, appParams, docSearch]);
    const specsFiltered = useMemo(
        () => filterSpecialities(specialties, specSearch),
        [specSearch]
    );
    const docsPerSpec = useMemo(() => {
        const specs = new Map();
        specialties.forEach((s) =>
            specs.set(
                s.name,
                filterDoctors(docsExpanded, { speciality: [s], ...appParams })
            )
        );
        return specs;
    }, [docsExpanded, appParams]);

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
            <Loader />
        </div>
    );

    function openTab(tabName) {
        setAppParams({ ...appParams, openedTab: tabName });
    }

    function handleParamChoice(paramName, paramData) {
        if (paramName === 'Doctor') setAppParams({ ...appParams, doctorId: paramData });
        else if (paramName === 'Speciality')
            setAppParams({ ...appParams, specialityId: paramData });
    }
}

export default AppStep2;

//     worksWithVhi: false,
//     followUp: false,
//     worksWithKids: false,
//     openedTab: 'Doctor',
//     doctorId: null,
//     specialityId: null,
//     clinicId: null,
//     date: '',
//     time: '',
