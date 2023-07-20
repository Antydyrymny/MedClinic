import { Navigate, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import Button from '../../../components/Button/Button';
import RowCss from './MyAppRow.module.css';

function MyAppRow({ app, cancelApp }) {
    const navigate = useNavigate();

    const finished = dayjs(app.date).isBefore(dayjs(), 'date');
    // address: clinics.find((c) => c.id === app.clinicId).address,
    //             speciality: specialities.find((s) => s.id === app.specialityId).name,
    //             doctorName: appDoc.name,
    //             doctorPhoto: appDoc.smallPhoto,
    return (
        <tr>
            <td>
                {
                    <>
                        <div className={RowCss.date}>
                            {dayjs(app.date).format('D MMMM, YYYY')}
                        </div>
                        <div className={RowCss.time}>{app.time}</div>
                    </>
                }
            </td>
            <td>
                {
                    <div className={RowCss.doctor}>
                        <img src={app.doctorPhoto} alt={app.doctorName} />
                        <div className={RowCss.doctorInfo}>
                            <div className={RowCss.doctorName}>{app.doctorName}</div>
                            <div className={RowCss.doctorSpec}>{app.speciality}</div>
                        </div>
                    </div>
                }
            </td>
            <td>
                {
                    <div className={RowCss.status}>
                        {finished ? 'Completed' : 'Upcoming'}
                    </div>
                }
            </td>
            <td>{<div className={RowCss.address}>{app.address}</div>}</td>
            <td>
                {
                    <div className={RowCss.actionButton}>
                        <Button
                            text={finished ? 'Reschedule' : 'Cancel'}
                            onClick={finished ? rescheduleApp : cancelApp}
                            customStyles={RowCss}
                        />
                    </div>
                }
            </td>
        </tr>
    );

    function rescheduleApp() {
        navigate(`/app/step1?doctorId=${app.docId}&followUp=${true}`);
    }
}

export default MyAppRow;
