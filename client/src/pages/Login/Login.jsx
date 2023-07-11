import { useState } from 'react';
import { useSignIn, useIsAuthenticated } from 'react-auth-kit';
import { useNavigate, Link } from 'react-router-dom';
import useRedirect from '../../hooks/useRedirect';
import LoginPageWrapperComponent from './LoginPageWrapperComponent';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import show from '../../assets/Pictogram/show.png';
import hide from '../../assets/Pictogram/hide.png';
import LoginCss from './Login.module.css';

function Login() {
    const signIn = useSignIn();
    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated();
    useRedirect('/myProfile', isAuthenticated());

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState('password');

    return (
        <LoginPageWrapperComponent
            children={
                <div className={LoginCss.wrapper}>
                    <p className={LoginCss.subheading}>
                        Please, enter email and password to enter personal profile
                    </p>
                    <form className={LoginCss.form}>
                        <div className={LoginCss.input}>
                            <InputField
                                value={email}
                                type={'text'}
                                label={'Email'}
                                autoComplete={'email'}
                                required={true}
                                onChange={setEmail}
                                maxlength={20}
                                valid={!!email.length}
                                customStyles={LoginCss}
                            />
                        </div>
                        <div className={`${LoginCss.input} ${LoginCss.passport}`}>
                            <InputField
                                value={password}
                                type={passwordType}
                                label={'Password'}
                                autoComplete={'off'}
                                required={true}
                                onChange={setPassword}
                                maxlength={20}
                                valid={!!password.length}
                                customStyles={LoginCss}
                            />
                            <div
                                className={LoginCss.showPasswordIcon}
                                onClick={() =>
                                    setPasswordType(
                                        passwordType === 'password' ? 'text' : 'password'
                                    )
                                }
                            >
                                <img
                                    src={passwordType === 'password' ? show : hide}
                                    alt='show password'
                                />
                            </div>
                        </div>
                        <div className={LoginCss.button}>
                            <Button
                                text={'Sign in'}
                                submit={true}
                                onClick={onLoginSubmit}
                                customStyles={LoginCss}
                            />
                        </div>
                        <p className={LoginCss.register}>
                            <span>No account? </span>
                            <Link to={'/register'}> Sign up</Link>
                        </p>
                    </form>
                    <p
                        onClick={() => {
                            setEmail('test');
                            setPassword('test');
                        }}
                        className={LoginCss.test}
                    >
                        test account here
                    </p>
                </div>
            }
        />
    );

    function onLoginSubmit() {
        signIn({
            token: 1,
            expiresIn: 30,
            tokenType: 'Bearer',
            authState: { name: 'JimBob' },
        });
        navigate('/myProfile', { replace: true });
    }
}

export default Login;
