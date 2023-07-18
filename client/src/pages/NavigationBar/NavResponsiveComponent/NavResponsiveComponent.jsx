import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useIsAuthenticated, useAuthUser } from 'react-auth-kit';
import useGetHandleLogout from '../../../hooks/useGetHanleLogout';
import useGetDragNDropHandler from '../../../hooks/useGetDragNDropHandler';
import Logo from 'src/pages/NavigationBar/Logo/Logo';
import SmallLogo from 'src/pages/NavigationBar/Logo/SmallLogo';
import MyProfileSvg from '../../../assets/Pictogram/MyProfileSvg';
import logout from '../../../assets/Pictogram/logout24px.png';
import LogoutSvg from '../../../assets/Pictogram/LogoutSvg';
import NavList from '../NavList/NavList';
import NavDropDown from '../NavDropDown/NavDropDown';
import ModalFeedbackForm from '../../../components/Modal/ModalFeedbackForm';
import HamburgerMenu from '../../../components/HamburgerMenu/HamburgerMenu';
import TelephoneSvg from '../../../assets/Pictogram/TelephoneSvg';
import Button from '../../../components/Button/Button';
import ModalButtonCss from './ModalButton.module.css';
import NavResponsiveCss from './NavResponsiveComponent.module.css';

function NavResponsiveComponent({ opened, setOpened, scrolling = false, screenSize }) {
    const isAuthenticated = useIsAuthenticated();
    const auth = useAuthUser();
    const userName = isAuthenticated() ? auth().name : 'my profile';
    const handleLogout = useGetHandleLogout();

    const dropDownref = useRef(null);
    const slidingNavList = useRef(null);
    const slidingNavListParent = useRef(null);
    const slidingDragNDropFunc = useGetDragNDropHandler(
        slidingNavList,
        slidingNavListParent
    );

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
                                        close={close}
                                        onHamburgerClick={onHamburgerClick}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={NavResponsiveCss.largeRight}>
                            <div className={NavResponsiveCss.makeACall}>
                                <Link
                                    className={NavResponsiveCss.telephone}
                                    to={'tel:1234567'}
                                >
                                    {'+1 (111) 123-45-67'}
                                </Link>
                                <br />
                                <div className={NavResponsiveCss.modalButton}>
                                    <ModalFeedbackForm
                                        buttonText={'Request a call back'}
                                        customBtnWrapper={ModalButtonCss}
                                        feedbackHeading={'Call me back'}
                                        feedbackText={
                                            'Leave a request and our manager will contact you shortly'
                                        }
                                        sendButtonText={'Send request'}
                                        onSuccessMessage={
                                            'We will call you back shortly.'
                                        }
                                    />
                                </div>
                            </div>
                            {scrolling ? (
                                <div className={NavResponsiveCss.largeRightMyProfile}>
                                    <Link to='/myProfile'>
                                        <MyProfileSvg />
                                    </Link>
                                    {isAuthenticated() && (
                                        <LogoutSvg onClick={() => handleLogout()} />
                                    )}
                                </div>
                            ) : null}
                            <Link to='/app/step1'>
                                <Button
                                    text={'appointment'}
                                    colored={'active'}
                                    customStyles={NavResponsiveCss}
                                />
                            </Link>
                        </div>
                    </div>
                    {!scrolling && (
                        <div className={NavResponsiveCss.secondBar}>
                            <NavList
                                opened={opened}
                                close={close}
                                onHamburgerClick={onHamburgerClick}
                            />
                            <div className={NavResponsiveCss.secondBarMyProfile}>
                                <Link
                                    to='/myProfile'
                                    className={NavResponsiveCss.myProfile}
                                >
                                    {userName}
                                </Link>
                                {isAuthenticated() && (
                                    <img
                                        src={logout}
                                        onClick={() => handleLogout()}
                                        alt='logout'
                                    />
                                )}
                            </div>
                        </div>
                    )}
                    <NavDropDown
                        opened={opened}
                        dropDownref={dropDownref}
                        close={close}
                    />
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
                        <Link to='/'>
                            <SmallLogo />
                        </Link>
                        <div className={NavResponsiveCss.smallFirstBarRightIcons}>
                            <Link to='/myProfile'>
                                <MyProfileSvg large={false} />
                            </Link>
                            {isAuthenticated() && (
                                <img
                                    src={logout}
                                    onClick={() => handleLogout()}
                                    alt='logout'
                                />
                            )}
                            <Link to={'tel:1234567'}>
                                <TelephoneSvg />
                            </Link>
                        </div>
                    </div>
                    <NavDropDown
                        opened={opened}
                        dropDownref={dropDownref}
                        close={close}
                    />
                    {!scrolling && (
                        <div
                            ref={slidingNavListParent}
                            className={NavResponsiveCss.smallSecondBar}
                        >
                            <div
                                ref={slidingNavList}
                                onDragStart={() => false}
                                onPointerDown={slidingDragNDropFunc}
                                className={NavResponsiveCss.slidingNavList}
                            >
                                <NavList
                                    opened={opened}
                                    close={close}
                                    onHamburgerClick={onHamburgerClick}
                                />
                            </div>
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

    function outOfBorder(e) {
        if (!dropDownref.current) return;
        const bottom = dropDownref.current.getBoundingClientRect().bottom;
        if (e.clientY > bottom) {
            close();
        }
    }
}

export default NavResponsiveComponent;
