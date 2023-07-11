import ButtonCss from './Button.module.css';

function Button({
    onClick,
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
            className={`${ButtonCss.wrapper} ${colored ? ButtonCss[colored] : null} ${
                notAllowed ? ButtonCss.notAllowed : null
            } ${customStyles ? customStyles.customBtnWrapper : null}`}
        >
            <button
                className={ButtonCss.hiddenButton}
                style={{ visibility: 'hidden' }}
                type={submit ? 'submit' : 'button'}
            >
                {text}
            </button>
            {children || <p>{text}</p>}
        </div>
    );
}

export default Button;
