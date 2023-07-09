import { useNavigate } from 'react-router-dom';
import { useSignOut } from 'react-auth-kit';
import MyProfileCss from './MyProfile.module.css';

function MyProfile() {
    const navigate = useNavigate();
    const signOut = useSignOut();
    const handleLogOut = async () => {
        navigate('/login');
        setTimeout(() => signOut(), 50);
    };
    return (
        <div>
            <div>My Profile</div>
            <div onClick={() => handleLogOut()}>Leave</div>
        </div>
    );
}

export default MyProfile;
