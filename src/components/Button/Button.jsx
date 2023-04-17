import ButtonCss from './Button.module.css';

function Button({ onClick, text, colored = null }) {
    return (
        <div
            onClick={onClick}
            className={`${ButtonCss.btn} ${colored && ButtonCss[colored]}`}
        >
            <p>{text}</p>
        </div>
    );
}

export default Button;
