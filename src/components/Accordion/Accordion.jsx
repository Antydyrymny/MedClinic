import { useState } from 'react';
import AccordionCss from './Accordion.module.css';

function Accordion({ children, label }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={AccordionCss.wrapper}>
            <p onClick={() => setIsActive(!isActive)}>{label}</p>
            {isActive && children}
        </div>
    );
}

export default Accordion;
