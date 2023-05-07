import { useState, useRef } from 'react';
import InputFieldCss from './InputField.module.css';

function InputField({
    type,
    label,
    value,
    onChange,
    required = false,
    placeholder = null,
    maxlength = null,
    valid,
}) {
    const inputRef = useRef(null);
    const allowShowError = useRef(false);
    const [isFocused, setIsFocused] = useState(false);

    allowShowError.current = allowShowError.current || isFocused;
    const errorClass =
        !valid && allowShowError.current && !isFocused
            ? required
                ? 'error'
                : 'warning'
            : null;

    return (
        <div
            className={`${InputFieldCss.wrapper} ${
                errorClass ? InputFieldCss.hasError : null
            }`}
            onClick={() => {
                inputRef.current.focus();
            }}
        >
            <input
                ref={inputRef}
                type={type}
                required={required}
                className={`${InputFieldCss.input} ${
                    errorClass === 'error'
                        ? InputFieldCss.error
                        : errorClass === 'warning'
                        ? InputFieldCss.warning
                        : null
                }`}
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
                onFocus={() => {
                    if (placeholder) {
                        inputRef.current.placeholder = placeholder;
                    }
                    setIsFocused(true);
                }}
                onBlur={() => {
                    if (placeholder) {
                        inputRef.current.placeholder = '';
                    }
                    setIsFocused(false);
                }}
                maxLength={maxlength}
            />
            <p
                className={`${InputFieldCss.label} ${
                    (isFocused || value) && InputFieldCss.focused
                }`}
            >
                {label}
            </p>
            {errorClass === 'error' && (
                <p className={InputFieldCss.errorText}>Fill in the required field</p>
            )}
            {errorClass === 'warning' && (
                <p className={InputFieldCss.warningText}>Check the input field</p>
            )}
        </div>
    );
}

export default InputField;
