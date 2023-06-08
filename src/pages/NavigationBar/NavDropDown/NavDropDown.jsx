import { useContext } from 'react';
import { ClinicsContext } from 'src/context/FetchDataContext';
import ClinicBlock from './ClinicBlock';
import NavDropDownCss from './NavDropDown.module.css';

function NavDropDown({ dropDownref }) {
    const clinics = useContext(ClinicsContext);

    return (
        <div ref={dropDownref} className={NavDropDownCss.wrapper}>
            {clinics.map((clinic) => (
                <ClinicBlock key={clinic.id} clinic={clinic} />
            ))}
        </div>
    );
}

export default NavDropDown;
