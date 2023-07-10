import { useLocation } from 'react-router-dom';
import { useAuthUser } from 'react-auth-kit';
import useRedirect from '../../hooks/useRedirect';
import useGetHandleLogout from '../../hooks/useGetHanleLogout';
import MyProfileCss from './MyProfile.module.css';

function MyProfile() {
    const location = useLocation();
    const auth = useAuthUser();
    const finalLocation = `/myProfile/${auth().name}`;

    useRedirect(finalLocation, location.pathname !== finalLocation);
    const handleLogout = useGetHandleLogout();

    return (
        <div>
            <div>My Profile</div>
            <div onClick={() => handleLogout()}>Leave</div>
        </div>
    );
}

export default MyProfile;
