import Checkbox from '../Checkbox/Checkbox';
import CheckboxListCss from './CheckboxList.module.css';

function CheckboxList({ points, onChange, checkedArray }) {
    return (
        <div className={CheckboxListCss.checkbox}>
            <fieldset>
                {points.map((point) => (
                    <Checkbox
                        key={point.id}
                        label={point.name}
                        onChange={onChange}
                        checked={checkedArray.includes(point.id)}
                        leftAligned={true}
                    />
                ))}
            </fieldset>
        </div>
    );
}

export default CheckboxList;
