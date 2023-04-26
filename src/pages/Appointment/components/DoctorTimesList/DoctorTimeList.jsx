import DoctorTimeCard from '../DoctorTimeCard/DoctorTimeCard';
import DoctorTimeListCss from './DoctorTimeList.module.css';

function DoctorTimeList({ entries, onClick }) {
    return (
        <div className={DoctorTimeListCss.wrapper}>
            {entries.map((entry) => (
                <DoctorTimeCard
                    key={entry.doctor.id}
                    doctor={entry.doctor}
                    clinic={entry.clinic}
                    times={entry.times}
                    onClick={onClick}
                />
            ))}
        </div>
    );
}

export default DoctorTimeList;

// doctor, clinic, times, onClick;
