import OptionSelectCss from './OptionSelect.module.css';

function OptionSelect({ options, onClick, active }) {
    return (
        <div className={OptionSelectCss.wrapper}>
            {options.map((optionName, ind) => (
                <div
                    key={ind}
                    onClick={() => onClick(optionName)}
                    className={`${OptionSelectCss.tab} ${
                        active === optionName ? OptionSelectCss.active : null
                    }`}
                >
                    {optionName}
                </div>
            ))}
        </div>
    );
}

export default OptionSelect;
