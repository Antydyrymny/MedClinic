import OptionSelectCss from './OptionSelect.module.css';

function OptionSelect({ options, onClick, active, disabled = [] }) {
    return (
        <div className={OptionSelectCss.wrapper}>
            {options.map((optionName, ind) => (
                <div
                    key={ind}
                    onClick={
                        disabled.includes(optionName) ? null : () => onClick(optionName)
                    }
                    className={`${OptionSelectCss.tab} ${
                        active === optionName ? OptionSelectCss.active : null
                    } ${disabled.includes(optionName) ? OptionSelectCss.disabled : null}`}
                >
                    {optionName}
                </div>
            ))}
        </div>
    );
}

export default OptionSelect;
