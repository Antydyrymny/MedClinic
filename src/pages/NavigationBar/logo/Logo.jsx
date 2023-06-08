import LogoCss from './Logo.module.css';

function Logo() {
    return (
        <div className={LogoCss.wrapper}>
            <img src={`/src/assets/Pictogram/logo48px.png`} alt={'Fullstack Clinic'} />
            <div className={LogoCss.textBlock}>
                <div className={LogoCss.heading}>{`fullstack clinic`}</div>
                <div className={LogoCss.text}>multidisciplinary clinic</div>
            </div>
        </div>
    );
}

export default Logo;
