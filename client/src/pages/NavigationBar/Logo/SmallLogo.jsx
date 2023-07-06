import logo32px from '/src/assets/Pictogram/logo32px.png';
import SmallLogoCss from './SmallLogo.module.css';

function SmallLogo() {
    return (
        <div className={SmallLogoCss.wrapper}>
            <img src={logo32px} alt={'Fullstack Clinic'} />
            <div className={SmallLogoCss.heading}>{`fullstack clinic`}</div>
        </div>
    );
}

export default SmallLogo;
