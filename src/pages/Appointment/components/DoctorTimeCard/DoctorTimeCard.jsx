import DoctorShortDescription from '../DoctorShortDescription/DoctorShortDescription';
import TimeList from '../TimeList/TimeList';
import DoctorTimeCardCSS from './DoctorTimeCard.module.css';

function DoctorTimeCard({ doctor, clinic, times, onClick }) {
    return (
        <div className={DoctorTimeCardCSS.wrapper}>
            <DoctorShortDescription doctor={doctor} />
            <TimeList clinic={clinic} times={times} onClick={onClick} />
        </div>
    );
}

export default DoctorTimeCard;
