import Button from '../Button/Button';
import ToggleSwitchCss from './ToggleSwitch.module.css';

function ToggleSwitch({ option1, option2, right, onClick, heading }) {
    return (
        <section className={ToggleSwitchCss.wrapper}>
            {heading && <h2 className={ToggleSwitchCss.heading}>{heading}</h2>}
            <div className={ToggleSwitchCss.toggle}>
                <Button
                    text={option1}
                    onClick={() => onClick(!right)}
                    colored={!right ? 'done' : null}
                />
                <Button
                    text={option2}
                    onClick={() => onClick(!right)}
                    colored={right ? 'done' : null}
                />
            </div>
        </section>
    );
}

export default ToggleSwitch;
