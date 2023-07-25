import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import MyCardCss from './MyAppCard.module.css';
import RescheduleButtonCss from './MyAppRowRescheduleButton.module.css';
import React from 'react';

function MyDocCard({ doctor }) {
    const navigate = useNavigate();

    return (
        <div className={MyCardCss.wrapper}>
            <div className={MyCardCss.content}>
                <img src={doctor.photo} alt={doctor.name} />
                <div className={MyCardCss.info}>
                    <div className={MyCardCss.doctorName}>{doctor.name}</div>
                    <div className={MyCardCss.doctorSpec}>{doctor.speciality}</div>
                </div>
            </div>
            <div className={MyCardCss.actionButton}>
                <Button
                    text={'Reschedule'}
                    onClick={rescheduleApp}
                    customStyles={RescheduleButtonCss}
                />
            </div>
        </div>
    );

    function rescheduleApp() {
        navigate(`/app/step1?doctorId=${doctor.id}&followUp=${true}`);
    }
}

export default MyDocCard;
