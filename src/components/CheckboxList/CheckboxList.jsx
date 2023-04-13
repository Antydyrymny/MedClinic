import CheckboxListCss from './CheckboxList.module.css';

function CheckboxList({ points, onChange }) {
    return (
        <div className={CheckboxListCss.checkbox}>
            <fieldset>
                {points.map((point) => (
                    <div key={point.id}>
                        <label>
                            {point.name}
                            <input
                                type='checkbox'
                                onChange={(e) => onChange(e.target.checked, point.name)}
                            />
                        </label>
                    </div>
                ))}
            </fieldset>
        </div>
    );
}

export default CheckboxList;
