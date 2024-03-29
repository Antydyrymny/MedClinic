import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import useDialog from '../../../hooks/useDialog';
import Dialog from '../../../components/Modal/Dialog';
import Button from '../../../components/Button/Button';
import LoadingSpinner from '../../../assets/Pictogram/LoadingSpinner';
import RescheduleButtonCss from './MyAppRowRescheduleButton.module.css';
import RowCss from './MyAppRow.module.css';

function MyAppRow({ app, cancelApp, updatingState, notAllowed }) {
    const navigate = useNavigate();
    const finished = app.date.hour(app.time.slice(0, 2)).isBefore(dayjs().tz());
    const [dialogRef, onDialogOpen] = useDialog();

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
                <div className={RowCss.date}>
                    {app.date.hour(app.time.slice(0, 2)).format('D MMMM, YYYY')}
                </div>
                <div className={RowCss.time}>{app.time}</div>
            </td>
            <td>
                <div className={RowCss.doctor}>
                    <img src={app.doctorPhoto} alt={app.doctorName} />
                    <div className={RowCss.doctorInfo}>
                        <div className={RowCss.doctorName}>{app.doctorName}</div>
                        <div className={RowCss.doctorSpec}>{app.speciality}</div>
                    </div>
                </div>
            </td>
            <td>
                <div
                    className={`${RowCss.status} ${
                        finished ? RowCss.completed : RowCss.upcoming
                    }`}
                >
                    {finished ? 'Completed' : 'Upcoming'}
                </div>
            </td>
            <td>
                <div className={RowCss.address}>{app.address}</div>
            </td>
            <td>
                <div className={RowCss.actionButton}>
                    <Button
                        text={finished ? 'Reschedule' : 'Cancel'}
                        notAllowed={notAllowed}
                        onClick={finished ? rescheduleApp : onDialogOpen}
                        customStyles={finished ? RowCss : RescheduleButtonCss}
                    />
                    <Dialog dialog={dialogRef}>
                        <div className={RowCss.dialogContent}>
                            <div>Are you sure you want to cancel the appointment?</div>
                            <div className={RowCss.dialogButtons}>
                                <div
                                    onClick={() => {
                                        dialogRef.current.close();
                                        cancelApp();
                                    }}
                                >
                                    Yes
                                </div>
                                <div onClick={() => dialogRef.current.close()}>No</div>
                            </div>
                        </div>
                    </Dialog>
                </div>
            </td>
        </tr>
    );

    function rescheduleApp() {
        navigate(`/app/step1?doctorId=${app.docId}&followUp=${true}`);
    }
}

export default MyAppRow;
