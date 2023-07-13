import { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import InputFieldCss from './InputField.module.css';

const InputField = forwardRef(function InputField(props, ref) {
    const {
        type,
        autoComplete = 'on',
        label,
        value,
        onChange,
        required = false,
        placeholder = null,
        maxlength = null,
        min = null,
        max = null,
        valid,
        showError = true,
        forceShowError = false,
        disableForceError = null,
        errorMessage = 'Fill in the required field',
        customStyles = null,
    } = props;
    const inputRef = useRef(null);
    const allowShowError = useRef(false);
    const [isFocused, setIsFocused] = useState(false);

    allowShowError.current =
        showError && required && (allowShowError.current || isFocused);
    const error = forceShowError ? true : !valid && allowShowError.current && !isFocused;

    useImperativeHandle(
        ref,
        () => {
            return {
                focus() {
                    inputRef.current.focus();
                },
                addEventListener(eventType, callback) {
                    inputRef.current.addEventListener(eventType, callback);
                },
                removeEventListener(eventType, callback) {
                    inputRef.current.removeEventListener(eventType, callback);
                },
            };
        },
        []
    );

    return (
        <div
            className={`${InputFieldCss.wrapper} ${
                error ? InputFieldCss.hasError : null
            } ${error && customStyles ? customStyles.customInputError : null}`}
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
                autoComplete={isFocused ? autoComplete : 'nope'}
                maxLength={maxlength}
                name={label}
                min={min}
                max={max}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
                onFocus={() => {
                    if (forceShowError) disableForceError();
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
            />
            <p
                className={`${InputFieldCss.label} ${
                    (isFocused || value || type === 'date') && InputFieldCss.focused
                }`}
            >
                {label}
            </p>
            {error && (
                <p
                    className={`${InputFieldCss.errorText} ${
                        customStyles ? customStyles.customInputErrorMsg : null
                    }`}
                >
                    {errorMessage}
                </p>
            )}
        </div>
    );
});

export default InputField;
