import CheckboxListCss from './Checkbox.module.css';

function Checkbox({ label, onChange, checked, leftAligned = false }) {
    return leftAligned ? (
        <div>
            <label>
                <input
                    type='checkbox'
                    onChange={(e) => onChange(e.target.checked, label)}
                    checked={checked}
                />
                {label}
            </label>
        </div>
    ) : (
        <div>
            <label>
                {label}
                <input
                    type='checkbox'
                    onChange={(e) => onChange(e.target.checked, label)}
                    checked={checked}
                />
            </label>
        </div>
    );
}

export default Checkbox;
