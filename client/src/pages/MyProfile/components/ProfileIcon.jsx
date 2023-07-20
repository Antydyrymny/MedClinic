import ProfileIconCss from './ProfileIcon.module.css';

function ProfileIcon({ label }) {
    return (
        <span className={ProfileIconCss.wrapper}>
            <span className={ProfileIconCss.label}>{label}</span>
            <div className={ProfileIconCss.onlineIcon} />
        </span>
    );
}

export default ProfileIcon;
