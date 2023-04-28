import Checkbox from '../Checkbox/Checkbox';
import CheckboxListCss from './CheckboxList.module.css';

function CheckboxList({ points, onChange, checkedArray, square }) {
    return (
        <div className={CheckboxListCss.wrapper}>
            <fieldset className={CheckboxListCss.fieldset}>
                {points.map((point) => (
                    <Checkbox
                        key={point.id}
                        label={point.name}
                        onChange={onChange}
                        checked={checkedArray.includes(point.id)}
                        leftAligned={true}
                        square={square}
                    />
                ))}
            </fieldset>
        </div>
    );
}

export default CheckboxList;
