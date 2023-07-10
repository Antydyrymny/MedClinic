import { useState } from 'react';
import { useSignIn, useIsAuthenticated } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import useRedirect from '../../hooks/useRedirect';
import LoginPageWrapperComponent from './LoginPageWrapperComponent';
import Button from '../../components/Button/Button';
import LoginCss from './Login.module.css';

function Login() {
    const signIn = useSignIn();
    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated();

    useRedirect('/myProfile', isAuthenticated());

    return (
        <LoginPageWrapperComponent
            children={
                <Button
                    text={'login'}
                    submit={true}
                    onClick={() => {
                        signIn({
                            token: 1,
                            expiresIn: 30,
                            tokenType: 'Bearer',
                            authState: { name: 'JimBob' },
                        });
                        navigate('/myProfile', { replace: true });
                    }}
                />
            }
        />
    );
}

export default Login;
