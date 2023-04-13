import ButtonCss from './Button.module.css';

function Button({ onClick, text, colored = true }) {
    return (
        <div className={colored ? ButtonCss.coloredBtn : ButtonCss.btn}>
            <button onClick={onClick}>{text}</button>
        </div>
    );
}

export default Button;
