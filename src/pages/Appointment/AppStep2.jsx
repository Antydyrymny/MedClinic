import { useState, useContext } from 'react';
import { AppointmentFilterContext } from 'src/context/AppointmentFilterContext';
import App2ParamSelect from './components/App2ParamSelect/App2ParamSelect';
import App2Grid from './components/App2Grid/App2Grid';
import AppStep2Css from './AppStep2.module.css';

function AppStep2() {
    const [appParams, setAppParams] = useContext(AppointmentFilterContext);
    const [docSearch, setDocSearch] = useState('');
    const [specSearch, setSpecSearch] = useState('');
    const openedTab = appParams.openedTab;

    return (
        <div className={AppStep2Css.wrapper}>
            <App2ParamSelect
                openedTab={openedTab}
                onClick={openTab}
                docSearchProp={[docSearch, setDocSearch]}
                specSearchProp={[specSearch, setSpecSearch]}
            />
            <App2Grid />
        </div>
    );

    function openTab(tabName) {
        setAppParams({ ...appParams, openedTab: tabName });
    }
}

export default AppStep2;

//     VHI: false,
//     followUp: false,
//     child: false,
//     openedTab: 'Doctor',
//     doctorId: null,
//     specialityId: null,
//     clinicId: null,
//     date: '',
//     time: '',
