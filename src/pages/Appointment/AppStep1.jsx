import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { doctorsKey, clinicsKey, specialitiesKey } from '../../data/SessionStorageKeys';
import { expandDoctors } from '../../utils/ExpandDoctors';
import { AppointmentFilterContext } from 'src/context/AppointmentFilterContext';
import { clearAppData } from 'src/utils/ClearAppData';
import ToggleSwitch from 'src/components/ToggleSwitch/ToggleSwitch';
import Button from 'src/components/Button/Button';
import AppStep1Css from './AppStep1.module.css';

function AppStep1() {
    const [appParams, setAppParams] = useContext(AppointmentFilterContext);
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const doctors = JSON.parse(window.sessionStorage.getItem(doctorsKey));
    const doctorId = searchParams.get('doctorId');
    const chosenDoc =
        doctors && doctorId ? doctors.find((doc) => doc.id === +doctorId) : null;
    const followUp = chosenDoc && searchParams.get('followUp');
    const [appToChosenDoc, setAppToChosenDoc] = useState(!!chosenDoc);

    useEffect(() => {
        // if (followUp) setAppParams((prevParams) => ({ ...prevParams, followUp: true }));
        if (followUp) setAppParams({ ...appParams, followUp: true });
        // return () => setAppParams({ ...appParams, followUp: false });
        // return () => setAppParams((prevParams) => ({ ...prevParams, followUp: false }));
    }, [followUp, setAppParams]);

    return (
        <div className={AppStep1Css.wrapper}>
            {!!chosenDoc && (
                <div className={AppStep1Css.toogle}>
                    <ToggleSwitch
                        heading={`Appointment to doctor: ${chosenDoc.name}`}
                        option1={'Yes'}
                        option2={'No'}
                        right={!appToChosenDoc}
                        onClick={manageChosenDoctor}
                    />
                </div>
            )}
            <div className={AppStep1Css.toggle}>
                <ToggleSwitch
                    heading={'Form of payment'}
                    option1={'Regular appointment'}
                    option2={'VHI coverage'}
                    right={appParams.worksWithVhi}
                    onClick={setBooleanParam('worksWithVhi')}
                />
            </div>
            <div className={AppStep1Css.toggle}>
                <ToggleSwitch
                    heading={'Type of visit'}
                    option1={'Initial appointment'}
                    option2={'Follow-up appointment'}
                    right={appParams.followUp}
                    onClick={setBooleanParam('followUp')}
                />
            </div>
            <div className={AppStep1Css.toggle}>
                <ToggleSwitch
                    heading={'Age'}
                    option1={'Adult'}
                    option2={'Child'}
                    right={appParams.worksWithKids}
                    onClick={setBooleanParam('worksWithKids')}
                />
            </div>
            <div className={AppStep1Css.next}>
                <div className={AppStep1Css.button}>
                    <Button
                        text={'Next step'}
                        colored={'active'}
                        onClick={
                            appToChosenDoc
                                ? handleNextWithChosenDoc
                                : () => navigate('/app/step2')
                        }
                    />
                </div>
            </div>
        </div>
    );

    function setBooleanParam(param) {
        return (boolean) => {
            clearAppData(appParams, setAppParams, 2);
            setAppParams((p) => ({ ...p, [param]: boolean }));
        };
    }

    function manageChosenDoctor(boolean) {
        clearAppData(appParams, setAppParams, 2);
        setAppToChosenDoc(!boolean);
    }

    function handleNextWithChosenDoc() {
        const specialties = JSON.parse(window.sessionStorage.getItem(specialitiesKey));
        const clinics = JSON.parse(window.sessionStorage.getItem(clinicsKey));
        const docExpanded = expandDoctors([chosenDoc], specialties, clinics)[0];

        clearAppData(appParams, setAppParams, 2);
        setAppParams({
            ...appParams,
            doctorId: docExpanded.id,
            step3Format: 'Doctor',
        });
        navigate('/app/step3', {
            state: { docsAvailable: [docExpanded] },
        });
    }
}

export default AppStep1;
