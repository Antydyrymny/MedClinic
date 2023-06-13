import { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ClinicsContext } from 'src/context/FetchDataContext';
import ClinicBlock from './ClinicBlock';
import SocialMedia from './SocialMedia';
import SmallNavListElement from './SmallNavListElement';
import SmallNavBottomBlock from './SmallNavBottomBlock';
import NavDropDownCss from './NavDropDown.module.css';

function NavDropDown({ opened, dropDownref, close }) {
    const clinics = useContext(ClinicsContext);
    const smallWindow = useRef(null);

    useEffect(() => {
        if (!smallWindow.current) return;
        // When the dropdown should open
        if (opened) {
            smallWindow.current.style.transition = `height ${0.4}s ease`;
        }
        // When it should close
        else {
            smallWindow.current.style.transition = `height ${0.2}s ease`;
        }
    }, [opened]);

    return (
        <div ref={dropDownref} className={NavDropDownCss.wrapper}>
            {/* Normal size screen */}
            <div
                className={`${NavDropDownCss.largeWindow} ${
                    opened ? NavDropDownCss.largeWindowOpened : null
                }`}
            >
                <div className={NavDropDownCss.infoBlock}>
                    <h4 className={NavDropDownCss.heading}>information</h4>
                    <Link
                        to={'/services'}
                        onClick={close}
                        className={NavDropDownCss.link}
                    >
                        Our services
                    </Link>
                    <Link
                        to={'/for_business'}
                        onClick={close}
                        className={NavDropDownCss.link}
                    >
                        For businesses
                    </Link>
                    <Link
                        to={'/partners'}
                        onClick={close}
                        className={NavDropDownCss.link}
                    >
                        For partners
                    </Link>
                </div>
                <div className={NavDropDownCss.largeClinicBlock}>
                    <h4 className={NavDropDownCss.heading}>our clinics</h4>
                    <div className={NavDropDownCss.largeClinicList}>
                        {clinics.map((clinic) => (
                            <ClinicBlock
                                key={clinic.id}
                                clinic={clinic}
                                opened={opened}
                                close={close}
                            />
                        ))}
                    </div>
                </div>
                <div className={NavDropDownCss.socialMedia}>
                    <SocialMedia />
                </div>
            </div>

            {/* Small size screen */}
            <div
                ref={smallWindow}
                className={`${NavDropDownCss.smallWindow} ${
                    opened ? NavDropDownCss.smallWindowOpened : null
                }`}
            >
                <SmallNavListElement
                    title={'Make an appointment'}
                    closeDropDown={closeDropDown}
                    instantLinkTo={'/app/step1'}
                />
                <SmallNavListElement
                    title={'Doctors'}
                    closeDropDown={closeDropDown}
                    instantLinkTo={'/doctors'}
                />
                <SmallNavListElement
                    title={'About us'}
                    closeDropDown={closeDropDown}
                    instantLinkTo={'/about'}
                />
                <SmallNavListElement
                    title={'Contacts'}
                    closeDropDown={closeDropDown}
                    instantLinkTo={'/contacts'}
                />
                <SmallNavListElement
                    title={'Information'}
                    closeDropDown={closeDropDown}
                    children={[
                        <Link
                            key={1}
                            to={'/services'}
                            className={NavDropDownCss.smallLink}
                        >
                            Our services
                        </Link>,
                        <Link
                            key={2}
                            to={'/for_business'}
                            className={NavDropDownCss.smallLink}
                        >
                            For businesses
                        </Link>,
                        <Link
                            key={3}
                            to={'/partners'}
                            className={NavDropDownCss.smallLink}
                        >
                            For partners
                        </Link>,
                    ]}
                />
                <SmallNavListElement
                    title={'Our clinics'}
                    closeDropDown={closeDropDown}
                    children={clinics.map((clinic) => (
                        <ClinicBlock
                            key={clinic.id}
                            clinic={clinic}
                            opened={opened}
                            close={close}
                            coloredBackground={false}
                        />
                    ))}
                />
                <SmallNavBottomBlock />
            </div>
        </div>
    );

    function closeDropDown() {
        smallWindow.current.style.transition = `height ${0}s ease`;
        close();
    }
}

export default NavDropDown;
