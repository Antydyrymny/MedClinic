import ButtonCss from './Button.module.css';

function Button({
    onClick,
    onSubmit = null,
    text,
    children,
    colored = null,
    submit = false,
    notAllowed = false,
    customStyles = null,
}) {
    return (
        <div
            onClick={notAllowed ? null : onClick}
            onSubmit={submit && onSubmit ? onSubmit : null}
            className={`${ButtonCss.wrapper} ${colored ? ButtonCss[colored] : null} ${
                notAllowed ? ButtonCss.notAllowed : null
            } ${customStyles ? customStyles.customBtnWrapper : null}`}
        >
            <button style={{ display: 'none' }} type={submit ? 'submit' : 'button'}>
                {text}
            </button>
            {children || <p>{text}</p>}
        </div>
    );
}

export default Button;
