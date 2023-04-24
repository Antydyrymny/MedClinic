import { getBookedDates } from 'src/utils/GetBookedDates';
import SpecStep3Css from './SpecStep3.module.css';

function SpecStep3({ step3Data, bookedTimesData }) {
    const bookedDates = getBookedDates(step3Data.docsAvailable, bookedTimesData);
    return (
        <>
            <div>{step3Data.docsAvailable.map((d) => d.name)}</div>
            <div>
                {bookedDates.map((date, ind) => {
                    const d = new Date(date);
                    return <div key={ind}>{`${d.getMonth()}.${d.getDate()}`}</div>;
                })}
            </div>
        </>
    );
}

export default SpecStep3;
