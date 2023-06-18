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
    customLabel,
}) {
    return leftAligned ? (
        <div className={CheckboxListCss.wrapper}>
            <label
                className={`${CheckboxListCss.label} ${
                    highlight && checked ? CheckboxListCss.checked : null
                } ${!pointer ? CheckboxListCss.noPointer : null}`}
                style={customLabel}
            >
                <input
                    type='checkbox'
                    onChange={(e) => onChange(e.target.checked, label)}
                    checked={checked}
                    className={CheckboxListCss.input}
                    name={label || 'checkBox'}
                />
                <div className={CheckboxListCss.button}>
                    <CheckboxButton checked={checked} square={square} />
                </div>
                <div className={CheckboxListCss.content}>
                    {children ? children : label}
                </div>
            </label>
        </div>
    ) : (
        <div className={CheckboxListCss.wrapper}>
            <label
                className={`${CheckboxListCss.label} ${
                    CheckboxListCss.labelRightAligned
                } ${highlight && checked ? CheckboxListCss.checked : null} ${
                    !pointer ? CheckboxListCss.noPointer : null
                }`}
                style={customLabel}
            >
                <div className={CheckboxListCss.content}>
                    {children ? children : label}
                </div>
                <input
                    type='checkbox'
                    onChange={(e) => onChange(e.target.checked, label)}
                    checked={checked}
                    className={CheckboxListCss.input}
                    name={label || 'checkBox'}
                />
                <div className={CheckboxListCss.button}>
                    <CheckboxButton checked={checked} square={square} />
                </div>
            </label>
        </div>
    );
}

export default Checkbox;
