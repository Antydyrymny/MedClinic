import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import Dialog from '../../../components/Modal/Dialog';
import Button from '../../../components/Button/Button';
import LoadingSpinner from '../../../assets/Pictogram/LoadingSpinner';
import RowCss from './MyAppRow.module.css';

function MyAppRow({ app, cancelApp, updatingState, notAllowed }) {
    const navigate = useNavigate();
    const finished = app.date.hour(app.time.slice(0, 2)).isBefore(dayjs.tz(), 'hour');
    const dialogRef = useRef(null);

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
                            {app.date.hour(app.time.slice(0, 2)).format('D MMMM, YYYY')}
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
                        <Dialog
                            dialog={dialogRef}
                            inactive={finished || notAllowed}
                            openButton={
                                <Button
                                    text={finished ? 'Reschedule' : 'Cancel'}
                                    onClick={finished ? rescheduleApp : null}
                                    customStyles={RowCss}
                                    notAllowed={notAllowed}
                                />
                            }
                        >
                            <div>
                                Are you sure you want to cancel the appointment?
                                <div
                                    onClick={() => {
                                        dialogRef.current.close();
                                        cancelApp();
                                    }}
                                >
                                    yes
                                </div>
                                <div onClick={() => dialogRef.current.close()}>no</div>
                            </div>
                        </Dialog>
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
