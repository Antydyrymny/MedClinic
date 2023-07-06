import { useState } from 'react';
import DropDownSvg from 'src/assets/Pictogram/DropDownSvg';
import AccordionCss from './Accordion.module.css';

function Accordion({ children, label, openByDefault = false }) {
    const [isActive, setIsActive] = useState(openByDefault);

    return (
        <div className={AccordionCss.wrapper}>
            <div onClick={() => setIsActive(!isActive)} className={AccordionCss.mainBar}>
                <p className={AccordionCss.label}>{label}</p>
                <div
                    className={`${AccordionCss.arrow} ${
                        isActive ? AccordionCss.arrowChoosing : null
                    }`}
                >
                    <DropDownSvg />
                </div>
            </div>
            {isActive && <div className={AccordionCss.children}>{children}</div>}
        </div>
    );
}

export default Accordion;
