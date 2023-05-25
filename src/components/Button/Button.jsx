import ButtonCss from './Button.module.css';

function Button({ onClick, text, colored = null, submit = false, notAllowed = false }) {
    return (
        <div
            onClick={notAllowed ? null : onClick}
            className={`${ButtonCss.wrapper} ${colored && ButtonCss[colored]} ${
                notAllowed ? ButtonCss.notAllowed : null
            }`}
        >
            <button style={{ display: 'none' }} type={submit ? 'submit' : 'button'}>
                {text}
            </button>
            <p>{text}</p>
        </div>
    );
}

export default Button;
