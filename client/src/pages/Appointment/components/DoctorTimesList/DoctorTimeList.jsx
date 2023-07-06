import DoctorTimeCard from '../DoctorTimeCard/DoctorTimeCard';
import DoctorTimeListCss from './DoctorTimeList.module.css';

function DoctorTimeList({ entries, online, onClick, followUp }) {
    return (
        <div className={DoctorTimeListCss.wrapper}>
            {entries.map((entry) => (
                <DoctorTimeCard
                    key={entry.doctor.id}
                    doctor={entry.doctor}
                    online={online}
                    followUp={followUp}
                    clinic={entry.clinic}
                    times={entry.times}
                    onClick={onClick}
                />
            ))}
        </div>
    );
}

export default DoctorTimeList;
