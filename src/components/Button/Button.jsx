import ButtonCss from './Button.module.css';

function Button({ onClick, text, colored = null, submit = false }) {
    return (
        <div
            onClick={onClick}
            className={`${ButtonCss.btn} ${colored && ButtonCss[colored]}`}
        >
            <button style={{ display: 'none' }} type={submit ? 'submit' : 'button'}>
                {text}
            </button>
            <p>{text}</p>
        </div>
    );
}

export default Button;
