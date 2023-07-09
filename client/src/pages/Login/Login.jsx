import { useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import LoginCss from './Login.module.css';

function Login() {
    const signIn = useSignIn();
    const navigate = useNavigate();

    return (
        <Button
            text={'login'}
            submit={true}
            onClick={() => {
                signIn({
                    token: 1,
                    expiresIn: 3600,
                    tokenType: 'Bearer',
                    authState: { name: 'JimBob' },
                });
                navigate('/myProfile', { replace: true });
            }}
        />
    );
}

export default Login;
