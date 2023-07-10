import { useNavigate } from 'react-router-dom';
import { useSignOut } from 'react-auth-kit';

export default function useGetHandleLogout(redirectTo = '/') {
    const navigate = useNavigate();
    const signOut = useSignOut();

    return async () => {
        navigate(redirectTo);
        setTimeout(() => signOut(), 50);
    };
}
