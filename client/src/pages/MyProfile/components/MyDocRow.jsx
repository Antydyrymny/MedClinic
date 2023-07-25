import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import RowCss from './MyAppRow.module.css';
import RescheduleButtonCss from './MyAppRowRescheduleButton.module.css';

function MyDocRow({ doctor }) {
    const navigate = useNavigate();

    return (
        <tr className={RowCss.row}>
            <td>
                <div className={RowCss.doctor}>
                    <img src={doctor.photo} alt={doctor.name} />
                    <div className={RowCss.doctorInfo}>
                        <div className={RowCss.doctorName}>{doctor.name}</div>
                        <div className={RowCss.doctorSpec}>{doctor.speciality}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className={RowCss.address}>{doctor.clinic}</div>
            </td>
            <td>
                <Button
                    text={'Reschedule'}
                    onClick={rescheduleApp}
                    customStyles={RescheduleButtonCss}
                />
            </td>
        </tr>
    );

    function rescheduleApp() {
        navigate(`/app/step1?doctorId=${doctor.id}&followUp=${true}`);
    }
}

export default MyDocRow;
