import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppointmentFilterContext } from 'src/context/AppointmentFilterContext';
import ToggleSwitch from 'src/components/ToggleSwitch/ToggleSwitch';
import Button from 'src/components/Button/Button';
import AppStep1Css from './AppStep1.module.css';

function AppStep1() {
    const [appParams, setAppParams] = useContext(AppointmentFilterContext);
    const navigate = useNavigate();
    return (
        <div className={AppStep1Css.wrapper}>
            <ToggleSwitch
                heading={'Form of payment'}
                option1={'Regular appointment'}
                option2={'VHI coverage'}
                right={appParams.Vhi}
                onClick={setBooleanParam('Vhi')}
            />
            <ToggleSwitch
                heading={'Type of visit'}
                option1={'Initial appointment'}
                option2={'Follow-up appointment'}
                right={appParams.followUp}
                onClick={setBooleanParam('followUp')}
            />
            <ToggleSwitch
                heading={'Age'}
                option1={'Adult'}
                option2={'Child'}
                right={appParams.child}
                onClick={setBooleanParam('child')}
            />
            <Button
                text={'Next step'}
                colored={'active'}
                onClick={() => navigate('/app/step2')}
            />
        </div>
    );

    function setBooleanParam(param) {
        return (boolean) => setAppParams({ ...appParams, [param]: boolean });
    }
}

export default AppStep1;
//  onClick, text, colored;
// {
//     option1, option2, right, onClick, heading;
// }
// Regular appointment/VHI coverage
// Initial appointment/Follow-up appointment
// Adult/Child
//   count: 0,
//     VHI: false,
//     followUp: false,
//     child: false,
//     openedTab: 'Doctor',
//     doctorId: null,
//     specialityId: null,
//     clinicId: null,
//     date: '',
//     time: '',
