import { Navigate, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import Button from '../../../components/Button/Button';
import LoadingSpinner from '../../../assets/Pictogram/LoadingSpinner';
import RowCss from './MyAppRow.module.css';

function MyAppRow({ app, cancelApp, updatingState }) {
    const navigate = useNavigate();
    const finished = dayjs(app.date).hour(app.time.slice(0, 2)).isBefore(dayjs(), 'hour');

    return updatingState ? (
        <tr className={RowCss.row}>
            <td colSpan={5}>
                {updatingState.isLoading ? (
                    <LoadingSpinner text={false} />
                ) : (
                    <div className={RowCss.notification}>{updatingState.message}</div>
                )}
            </td>
        </tr>
    ) : (
        <tr className={RowCss.row}>
            <td>
                {
                    <>
                        <div className={RowCss.date}>
                            {dayjs(app.date)
                                .hour(app.time.slice(0, 2))
                                .format('D MMMM, YYYY')}
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
