import logo32px from '/src/assets/Pictogram/logo32px.png';
import SmallLogoCss from './SmallLogo.module.css';

function SmallLogo({ fontSize = '1rem' }) {
    return (
        <div className={SmallLogoCss.wrapper}>
            <img src={logo32px} alt={'Fullstack Clinic'} />
            <div
                className={SmallLogoCss.heading}
                style={{ fontSize: fontSize }}
            >{`fullstack clinic`}</div>
        </div>
    );
}

export default SmallLogo;
