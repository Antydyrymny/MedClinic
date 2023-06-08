import { useContext } from 'react';
import { ClinicsContext } from 'src/context/FetchDataContext';
import NavDropDownCss from './NavDropDown.module.css';

function NavDropDown({ dropDownref }) {
    return (
        <div ref={dropDownref} className={NavDropDownCss.wrapper}>
            NavDropDown
        </div>
    );
}

export default NavDropDown;
