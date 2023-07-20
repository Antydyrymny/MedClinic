import ProfileIcon from './ProfileIcon';
import Hamburger from '../../../assets/Pictogram/Hamburger';
import MyNavCss from './MyNav.module.css';

function MyNav({ surname, name, openMenu, screenWidth }) {
    const smallScreen = screenWidth <= 1200;

    const surnameToShow = surname?.[0].toUpperCase() + surname?.slice(1).toLowerCase();
    const nameToShow = name?.[0].toUpperCase() + name?.slice(1).toLowerCase();
    const label = surnameToShow?.[0] + nameToShow?.[0];

    return (
        <>
            <div className={MyNavCss.shadow} />
            <div className={MyNavCss.wrapper}>
                <div
                    className={`${MyNavCss.hamburger} ${
                        smallScreen ? MyNavCss.hamburgerShow : null
                    }`}
                    onClick={smallScreen ? openMenu : null}
                >
                    <Hamburger />
                </div>
                <div className={MyNavCss.userCard}>
                    <p
                        className={MyNavCss.userName}
                    >{`${surnameToShow} ${nameToShow}`}</p>
                    <ProfileIcon label={label} />
                </div>
            </div>
        </>
    );
}

export default MyNav;
