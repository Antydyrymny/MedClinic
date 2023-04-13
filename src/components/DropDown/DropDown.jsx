import { useState } from 'react';
import DropDownCss from './DropDown.module.css';

function DropDown({ children, label }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div>
            <p onClick={() => setIsActive(!isActive)}>{label}</p>
            {isActive && children}
        </div>
    );
}

export default DropDown;
