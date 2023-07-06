import DoctorShortDescription from '../DoctorShortDescription/DoctorShortDescription';
import TimeList from '../TimeList/TimeList';
import DoctorTimeCardCSS from './DoctorTimeCard.module.css';

function DoctorTimeCard({ doctor, online, clinic, times, onClick, followUp }) {
    return (
        <div className={DoctorTimeCardCSS.wrapper}>
            <div className={DoctorTimeCardCSS.doctor}>
                <DoctorShortDescription doctor={doctor} followUp={followUp} />
            </div>
            <div className={DoctorTimeCardCSS.time}>
                <TimeList
                    online={online}
                    clinic={clinic}
                    times={times}
                    onClick={onClick}
                    doctorId={doctor.id}
                />
            </div>
        </div>
    );
}

export default DoctorTimeCard;
