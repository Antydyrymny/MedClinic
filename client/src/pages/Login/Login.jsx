import { useState, useRef } from 'react';
import { useSignIn } from 'react-auth-kit';
import { useNavigate, Link } from 'react-router-dom';
import useGetShowSubmitError from '../../hooks/useGetShowSubmitError';
import LoginPageWrapperComponent from './LoginPageWrapperComponent';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import show from '../../assets/Pictogram/show.png';
import hide from '../../assets/Pictogram/hide.png';
import handPointer from '../../assets/Pictogram/hand-pointer.png';
import LoadingSpinner from '../../assets/Pictogram/LoadingSpinner';
import LoginCss from './Login.module.css';

const errorSchema = {
    email: false,
    password: false,
};
const defaultError = 'Please, enter your email and password';

function Login() {
    const signIn = useSignIn();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState('password');
    const allowSubmit = !!email.length && !!password.length;

    const [inputErrors, setInputErrors] = useState(errorSchema);

    const [isLoading, setIsLoading] = useState(false);

    const [errorMessage, setErrorMessage] = useState(defaultError);
    const showSubmitErrorTimerRef = useRef(null);
    const [isShowingSubmitError, setIsShowingSubmitError] = useState(false);
    const showError = useGetShowSubmitError({
        setErrorMessage,
        showSubmitErrorTimerRef,
        setIsShowingSubmitError,
        allowSubmit,
        setInputErrors,
    });

    return (
        <LoginPageWrapperComponent
            children={
                <div className={LoginCss.wrapper}>
                    <p className={LoginCss.subheading}>
                        Please, enter email and password to enter personal profile
                    </p>
                    <form
                        className={LoginCss.form}
                        onSubmit={
                            isLoading
                                ? null
                                : allowSubmit
                                ? onLoginSubmit
                                : () => showError(defaultError, getEmptyFields())
                        }
                    >
                        <div className={LoginCss.input}>
                            <InputField
                                value={email}
                                type={'text'}
                                label={'Email'}
                                autoComplete={'email'}
                                required={true}
                                forceShowError={inputErrors.email}
                                disableForceError={disableForceError('email')}
                                onChange={setEmail}
                                maxlength={20}
                                valid={!!email.length}
                                customStyles={LoginCss}
                            />
                        </div>
                        <div className={`${LoginCss.input} ${LoginCss.password}`}>
                            <InputField
                                value={password}
                                type={passwordType}
                                label={'Password'}
                                autoComplete={'off'}
                                required={true}
                                forceShowError={inputErrors.password}
                                disableForceError={disableForceError('password')}
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
                        <div
                            className={LoginCss.button}
                            onClick={
                                allowSubmit
                                    ? null
                                    : () => showError(defaultError, getEmptyFields())
                            }
                        >
                            <Button
                                text={'Sign in'}
                                submit={true}
                                onClick={
                                    isLoading ? null : allowSubmit ? onLoginSubmit : null
                                }
                                customStyles={LoginCss}
                            />
                            <div
                                className={`${LoginCss.loading} ${
                                    isLoading ? LoginCss.isLoading : null
                                }`}
                            >
                                <LoadingSpinner text={false} customStyles={LoginCss} />
                            </div>
                            <div
                                className={`${LoginCss.submitError} ${
                                    isShowingSubmitError ? LoginCss.submitErrorShow : null
                                }`}
                            >
                                {errorMessage}
                            </div>
                        </div>
                        <p className={LoginCss.register}>
                            <span>No account? </span>
                            <Link to={'/register'}> Sign up</Link>
                        </p>
                    </form>
                    <p
                        onClick={() => {
                            setEmail('test@test.com');
                            setPassword('test');
                        }}
                        className={LoginCss.test}
                    >
                        <img src={handPointer} alt='press for test account' /> for test
                        account
                    </p>
                </div>
            }
        />
    );

    function disableForceError(field) {
        return () => setInputErrors((prevState) => ({ ...prevState, [field]: false }));
    }

    function getEmptyFields() {
        const emptyFields = [];
        if (!email.length) emptyFields.push('email');
        if (!password.length) emptyFields.push('password');
        return emptyFields;
    }

    async function onLoginSubmit() {
        try {
            setIsLoading(true);
            const serverURL = import.meta.env.VITE_SERVER_URL;
            const response = await fetch(serverURL + 'api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const result = await response.json();
            setIsLoading(false);
            if (response.status === 401) {
                showError(result.message);
            } else if (response.status === 200) {
                signIn({
                    token: result.token,
                    expiresIn: 30,
                    tokenType: 'Bearer',
                    authState: { name: result.name },
                });
                navigate('/myProfile', { replace: true });
            }
        } catch (error) {
            setIsLoading(false);
            showError('Error connecting to login server, try again later', null, 4500);
        }
    }
}

export default Login;
