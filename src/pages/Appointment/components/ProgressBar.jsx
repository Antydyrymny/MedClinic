import { useContext } from 'react';
import { AppointmentCurStepContext } from 'src/context/AppointmentCurStepContext';
import ProgressBarCss from './ProgressBar.module.css';

function ProgressBar() {
    const step = useContext(AppointmentCurStepContext);
    const activeComponentWidth = step * 25 - 10;
    const emptyComponentWidth = 100 - activeComponentWidth;

    return (
        <div className={ProgressBarCss.container}>
            <div
                className={ProgressBarCss.active}
                style={{ width: `${activeComponentWidth}%` }}
            />
            <div
                className={ProgressBarCss.empty}
                style={{ width: `${emptyComponentWidth}%` }}
            />
        </div>
    );
}

export default ProgressBar;
