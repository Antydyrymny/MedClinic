import { useState } from 'react';
import DropDownSvg from 'src/assets/Pictogram/DropDownSvg';
import SpecialSelectCss from './SpecialSelect.module.css';

function SpecialSelect({ options, activeId, onClick }) {
    const [choosing, setChoosing] = useState(false);
    return (
        <div className={SpecialSelectCss.wrapper} onClick={() => setChoosing(!choosing)}>
            <div className={SpecialSelectCss.mainBar}>
                <div className={SpecialSelectCss.name}>
                    {options.find((option) => option.id === activeId).name}
                </div>
                <div
                    className={`${SpecialSelectCss.arrow} ${
                        choosing ? SpecialSelectCss.arrowChoosing : null
                    }`}
                >
                    <DropDownSvg />
                </div>
            </div>
            {!choosing ? null : (
                <div className={SpecialSelectCss.options}>
                    {options.map((option, ind) => (
                        <div
                            key={ind}
                            className={SpecialSelectCss.optionBar}
                            onClick={() => onClick(option.id)}
                        >
                            {option.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SpecialSelect;
