import { useNavigate } from 'react-router-dom';
import TimeListCss from './TimeList.module.css';

function TimeList({ clinic, times, onClick, doctorId = null }) {
    const navigate = useNavigate();

    return (
        <div className={TimeListCss.wrapepr}>
            {!clinic ? null : <div className={TimeListCss.clinic}>{clinic.address}</div>}
            <div className={TimeListCss.times}>
                {times.map((time, ind) => (
                    <div
                        key={ind}
                        className={TimeListCss.time}
                        onClick={() => {
                            onClick(time, clinic.id, doctorId);
                            navigate('/app/step4');
                        }}
                    >
                        {time}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TimeList;
