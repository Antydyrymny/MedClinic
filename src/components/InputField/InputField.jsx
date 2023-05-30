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
    errorMessage = 'Fill in the required field',
    customStyles = null,
}) {
    const inputRef = useRef(null);
    const allowShowError = useRef(false);
    const [isFocused, setIsFocused] = useState(false);

    allowShowError.current = required && (allowShowError.current || isFocused);
    const error = !valid && allowShowError.current && !isFocused;
    return (
        <div
            className={`${InputFieldCss.wrapper} ${
                error ? InputFieldCss.hasError : null
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
                    error ? InputFieldCss.error : null
                } ${customStyles ? customStyles.customInput : null}`}
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
            {error && <p className={InputFieldCss.errorText}>{errorMessage}</p>}
        </div>
    );
}

export default InputField;
