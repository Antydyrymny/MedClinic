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
                right={appParams.worksWithVhi}
                onClick={setBooleanParam('worksWithVhi')}
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
                right={appParams.worksWithKids}
                onClick={setBooleanParam('worksWithKids')}
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
