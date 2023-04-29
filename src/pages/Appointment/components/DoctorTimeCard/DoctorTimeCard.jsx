import DoctorShortDescription from '../DoctorShortDescription/DoctorShortDescription';
import TimeList from '../TimeList/TimeList';
import DoctorTimeCardCSS from './DoctorTimeCard.module.css';

function DoctorTimeCard({ doctor, clinic, times, onClick }) {
    return (
        <div className={DoctorTimeCardCSS.wrapper}>
            <div className={DoctorTimeCardCSS.doctor}>
                <DoctorShortDescription doctor={doctor} />
            </div>
            <div className={DoctorTimeCardCSS.time}>
                <TimeList
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
