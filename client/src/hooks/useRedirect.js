import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useRedirect(target, condition = true) {
    const navigate = useNavigate();
    useEffect(() => {
        if (condition) navigate(target, { replace: true });
    }, [navigate, condition, target]);
}
