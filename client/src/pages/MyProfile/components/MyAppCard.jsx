import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import useDialog from '../../../hooks/useDialog';
import Dialog from '../../../components/Modal/Dialog';
import Button from '../../../components/Button/Button';
import LoadingSpinner from '../../../assets/Pictogram/LoadingSpinner';
import RescheduleButtonCss from './MyAppRowRescheduleButton.module.css';
import MyCardCss from './MyAppCard.module.css';

function MyAppCard({ app, cancelApp, updatingState, notAllowed }) {
    const navigate = useNavigate();
    const finished = app.date.hour(app.time.slice(0, 2)).isBefore(dayjs().tz());
    const [dialogRef, onDialogOpen] = useDialog();

    return updatingState ? (
        <div className={MyCardCss.wrapper}>
            {updatingState.isLoading ? (
                <LoadingSpinner text={false} />
            ) : (
                <div className={MyCardCss.notification}>{updatingState.message}</div>
            )}
        </div>
    ) : (
        <div className={MyCardCss.wrapper}>
            <div className={MyCardCss.content}>
                <img src={app.doctorPhoto} alt={app.doctorName} />
                <div className={MyCardCss.info}>
                    <div className={MyCardCss.doctorName}>{app.doctorName}</div>
                    <div className={MyCardCss.doctorSpec}>{app.speciality}</div>
                    <div className={MyCardCss.date}>
                        {app.date.hour(app.time.slice(0, 2)).format('D MMMM, YYYY HH:mm')}
                    </div>
                </div>
            </div>
            <div className={MyCardCss.actionButton}>
                <Button
                    text={finished ? 'Reschedule' : 'Cancel'}
                    notAllowed={notAllowed}
                    onClick={finished ? rescheduleApp : onDialogOpen}
                    customStyles={finished ? MyCardCss : RescheduleButtonCss}
                />
                <Dialog dialog={dialogRef} customStyles={MyCardCss}>
                    <div className={MyCardCss.dialogContent}>
                        <div>Are you sure you want to cancel the appointment?</div>
                        <div className={MyCardCss.dialogButtons}>
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
        </div>
    );

    function rescheduleApp() {
        navigate(`/app/step1?doctorId=${app.docId}&followUp=${true}`);
    }
}

export default MyAppCard;
