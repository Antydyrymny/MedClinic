import Checkbox from '../Checkbox/Checkbox';
import CheckboxListCss from './CheckboxList.module.css';

function CheckboxList({
    points,
    onChange,
    checkedArray,
    square,
    highlight,
    customLabel,
    maxHeight = null,
}) {
    return (
        <div className={CheckboxListCss.wrapper}>
            <fieldset
                className={`${CheckboxListCss.fieldset} ${
                    maxHeight ? CheckboxListCss.maxHeight : null
                }`}
                style={{ maxHeight: maxHeight }}
            >
                {points.map((point) => (
                    <Checkbox
                        key={point.id}
                        label={point.name}
                        onChange={onChange}
                        checked={checkedArray.includes(point.id)}
                        leftAligned={true}
                        square={square}
                        highlight={highlight}
                        customLabel={customLabel}
                    />
                ))}
            </fieldset>
        </div>
    );
}

export default CheckboxList;
