import ButtonCss from './Button.module.css';

function Button({ onClick, text, colored = null }) {
    return (
        <div
            onSelectStart={(e) => e.preventDefault()}
            onClick={onClick}
            className={`${ButtonCss.btn} ${colored && ButtonCss[colored]}`}
        >
            <p>{text}</p>
        </div>
    );
}

export default Button;
