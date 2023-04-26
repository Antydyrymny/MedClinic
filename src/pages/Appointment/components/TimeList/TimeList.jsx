import { useNavigate } from 'react-router-dom';
import TimeListCss from './TimeList.module.css';

function TimeList({ clinic, times, onClick }) {
    const navigate = useNavigate();

    return (
        <div className={TimeListCss.wrapepr}>
            <div className={TimeListCss.clinic}>{clinic.address}</div>
            <div className={TimeListCss.times}>
                {times.map((time, ind) => (
                    <div
                        key={ind}
                        className={TimeListCss.time}
                        onClick={() => {
                            onClick(time, clinic.id);
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
