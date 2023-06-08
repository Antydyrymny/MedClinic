import { useRef } from 'react';
import Logo from '../Logo/Logo';
import SmallLogo from '../Logo/SmallLogo';
import NavList from '../NavList/NavList';
import NavDropDown from '../NavDropDown/NavDropDown';
import ModalFeedbackForm from '../../../components/Modal/ModalFeedbackForm';
import HamburgerMenu from '../../../components/HamburgerMenu/HamburgerMenu';
import TelephoneSvg from '../../../assets/Pictogram/TelephoneSvg';
import Button from '../../../components/Button/Button';
import ModalButtonCss from './ModalButton.module.css';
import NavResponsiveCss from './NavResponsiveComponent.module.css';

function NavResponsiveComponent({ opened, setOpened, scrolling = false, screenSize }) {
    const dropDownref = useRef(null);

    return (
        <div className={NavResponsiveCss.wrapper}>
            {/* Normal window size */}
            {screenSize === 'large' && (
                <div className={NavResponsiveCss.largeWindow}>
                    <div className={NavResponsiveCss.firstBar}>
                        <div className={NavResponsiveCss.largeLeft}>
                            <a href='/'>
                                <Logo />
                            </a>
                            {!scrolling ? null : (
                                <div className={NavResponsiveCss.scrollingSecondBar}>
                                    <NavList
                                        scrolling={scrolling}
                                        opened={opened}
                                        onHamburgerClick={onHamburgerClick}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={NavResponsiveCss.largeRight}>
                            <div className={NavResponsiveCss.makeACall}>
                                <a
                                    className={NavResponsiveCss.telephone}
                                    href={'tel:1234567'}
                                >
                                    {'+1 (111) 123-45-67'}
                                </a>
                                <div className={NavResponsiveCss.modalButton}>
                                    <ModalFeedbackForm
                                        buttonText={'Request a call back'}
                                        customBtnWrapper={ModalButtonCss}
                                        feedbackHeading={'Call me back'}
                                        feedbackText={
                                            'Leave a request and our manager will contact you shortly'
                                        }
                                    />
                                </div>
                            </div>
                            <a href='/app/step1'>
                                <Button
                                    text={'appointment'}
                                    colored={'active'}
                                    customStyles={NavResponsiveCss}
                                />
                            </a>
                        </div>
                    </div>
                    {!scrolling && (
                        <div className={NavResponsiveCss.secondBar}>
                            <NavList
                                opened={opened}
                                onHamburgerClick={onHamburgerClick}
                            />
                        </div>
                    )}
                    {opened && <NavDropDown dropDownref={dropDownref} />}
                </div>
            )}

            {/* Small window size */}
            {screenSize === 'small' && (
                <div className={NavResponsiveCss.smallWindow}>
                    <div
                        className={`${NavResponsiveCss.smallFirstBar} ${
                            scrolling ? NavResponsiveCss.smallFirstBarScrolling : null
                        }`}
                    >
                        <HamburgerMenu opened={opened} onClick={onHamburgerClick} />
                        <a href='/'>
                            <SmallLogo />
                        </a>
                        <a href={'tel:1234567'}>
                            <TelephoneSvg />
                        </a>
                    </div>
                    {opened && <NavDropDown dropDownref={dropDownref} />}
                    {!scrolling && (
                        <div className={NavResponsiveCss.smallSecondBar}>
                            <NavList
                                opened={opened}
                                onHamburgerClick={onHamburgerClick}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );

    function onHamburgerClick() {
        if (opened) {
            close();
        } else {
            open();
        }

        function outOfBorder(e) {
            if (!dropDownref.current) return;
            const bottom = dropDownref.current.getBoundingClientRect().bottom;
            if (e.clientY > bottom) {
                close();
            }
        }

        function open() {
            setOpened(true);
            document.body.addEventListener('pointerdown', outOfBorder);
            document.body.addEventListener('touchend', outOfBorder);
            document.body.style.overflow = 'hidden';
        }

        function close() {
            setOpened(false);
            document.body.removeEventListener('pointerdown', outOfBorder);
            document.body.removeEventListener('touchend', outOfBorder);
            document.body.style.overflow = 'visible';
        }
    }
}

export default NavResponsiveComponent;
