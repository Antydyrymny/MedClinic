import CheckboxButton from './CheckboxButton';
import CheckboxListCss from './Checkbox.module.css';

function Checkbox({ label, onChange, checked, leftAligned = false, square = false }) {
    return leftAligned ? (
        <div className={CheckboxListCss.wrapper}>
            <label
                className={`${CheckboxListCss.label} ${
                    !square && checked ? CheckboxListCss.checked : null
                }`}
            >
                <input
                    type='checkbox'
                    onChange={(e) => onChange(e.target.checked, label)}
                    checked={checked}
                    className={CheckboxListCss.input}
                />
                <CheckboxButton checked={checked} square={square} />
                {label}
            </label>
        </div>
    ) : (
        <div className={CheckboxListCss.wrapper}>
            <label
                className={`${CheckboxListCss.label} ${
                    !square && checked ? CheckboxListCss.checked : null
                }`}
            >
                {label}
                <input
                    type='checkbox'
                    onChange={(e) => onChange(e.target.checked, label)}
                    checked={checked}
                    className={CheckboxListCss.input}
                />
                <CheckboxButton checked={checked} square={square} />
            </label>
        </div>
    );
}

export default Checkbox;
