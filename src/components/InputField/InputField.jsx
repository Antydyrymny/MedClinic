import InputFieldCss from './InputField.module.css';

function InputField({ type, label, onChange, required = false }) {
    return (
        <div className={InputFieldCss.wrapper}>
            <label className={InputFieldCss.label}>
                {label}
                <input
                    type={type}
                    required={required}
                    className={InputFieldCss.input}
                    onChange={(e) => onChange(e.target.value)}
                />
            </label>
        </div>
    );
}

export default InputField;
