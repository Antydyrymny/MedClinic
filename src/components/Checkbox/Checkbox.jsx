import CheckboxButton from './CheckboxButton';
import CheckboxListCss from './Checkbox.module.css';

function Checkbox({
    label,
    onChange,
    checked,
    leftAligned = false,
    square = false,
    children = false,
    highlight = true,
    pointer = true,
}) {
    return leftAligned ? (
        <div className={CheckboxListCss.wrapper}>
            <label
                className={`${CheckboxListCss.label} ${
                    highlight && checked ? CheckboxListCss.checked : null
                } ${!pointer ? CheckboxListCss.noPointer : null}`}
            >
                <input
                    type='checkbox'
                    onChange={(e) => onChange(e.target.checked, label)}
                    checked={checked}
                    className={CheckboxListCss.input}
                />
                <CheckboxButton checked={checked} square={square} />
                {children ? children : label}
            </label>
        </div>
    ) : (
        <div className={CheckboxListCss.wrapper}>
            <label
                className={`${CheckboxListCss.label} ${
                    highlight && checked ? CheckboxListCss.checked : null
                } ${!pointer ? CheckboxListCss.noPointer : null}`}
            >
                {children ? children : label}
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
