import SmallLogoCss from './SmallLogo.module.css';

function SmallLogo() {
    return (
        <div className={SmallLogoCss.wrapper}>
            <img src={`/src/assets/Pictogram/logo32px.png`} alt={'Fullstack Clinic'} />
            <div className={SmallLogoCss.heading}>{`fullstack clinic`}</div>
        </div>
    );
}

export default SmallLogo;
