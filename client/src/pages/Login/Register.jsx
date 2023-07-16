import { useState, useRef } from 'react';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import useGetShowSubmitError from '../../hooks/useGetShowSubmitError';
import IMask from 'imask';
import LoginPageWrapperComponent from './LoginPageWrapperComponent';
import { validateClientData } from '../../utils/validateClientData';
import termsAndConditions from 'src/assets/Example terms and conditions.txt';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Checkbox from '../../components/Checkbox/Checkbox';
import show from '../../assets/Pictogram/show.png';
import hide from '../../assets/Pictogram/hide.png';
import dayjs from 'dayjs';
import LoadingSpinner from '../../assets/Pictogram/LoadingSpinner';
import LoginCss from './Login.module.css';

const clientSchema = {
    surname: '',
    name: '',
    birthday: '',
    email: '',
    telephone: '',
    password: '',
};
const errorSchema = {
    surname: false,
    name: false,
    birthday: false,
    email: false,
    telephone: false,
    password: false,
};
const defaultSubmitError = 'Please, fill all fields and agree to terms and conditions';
const defaultInputError = 'Fill in the required field';

function Register() {
    const signIn = useSignIn();
    const navigate = useNavigate();

    const [client, setClient] = useState(clientSchema);

    // handling min/max birthday date
    const minBday = dayjs()
        .year(dayjs().year() - 120)
        .format('YYYY-MM-DD');
    const maxBday = dayjs().format('YYYY-MM-DD');
    const birthdayRef = useRef(null);

    // showing different error messages on inputs
    const [emailErrorMsg, setEmailErrorMsg] = useState(defaultInputError);
    const [telephoneErrorMsg, setTelephoneErrorMsg] = useState(defaultInputError);
    const [passwordErrorMsg, setPasswordErrorMsg] = useState(defaultInputError);

    // handling show/hide password button
    const [passwordType, setPasswordType] = useState('password');
    const [showPasswordError, setShowPasswordError] = useState(true);
    const passwordRef = useRef(null);

    const [termsAccepted, setTermsAccepted] = useState(false);
    const allowSubmit =
        termsAccepted &&
        validateClientData(client, {
            surname: true,
            name: true,
            birthday: true,
            email: true,
            telephone: true,
            password: true,
        });

    const [inputErrors, setInputErrors] = useState(errorSchema);

    const [isLoading, setIsLoading] = useState(false);

    const [errorMessage, setErrorMessage] = useState(defaultSubmitError);
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
                    <p className={LoginCss.subheading}>Sign up</p>
                    <form
                        className={LoginCss.form}
                        onSubmit={
                            isLoading
                                ? null
                                : allowSubmit
                                ? onFormSubmit
                                : () => showError(defaultSubmitError, getEmptyFields())
                        }
                    >
                        <div className={LoginCss.input}>
                            <InputField
                                value={client.surname}
                                type={'text'}
                                label={'Surname'}
                                autoComplete={'family-name'}
                                required={true}
                                forceShowError={inputErrors.surname}
                                disableForceError={disableForceError('surname')}
                                onChange={onChange('surname')}
                                maxlength={30}
                                valid={validateClientData(client, { surname: true })}
                                customStyles={LoginCss}
                            />
                        </div>
                        <div className={LoginCss.input}>
                            <InputField
                                value={client.name}
                                type={'text'}
                                label={'Name'}
                                autoComplete={'given-name'}
                                required={true}
                                forceShowError={inputErrors.name}
                                disableForceError={disableForceError('name')}
                                onChange={onChange('name')}
                                maxlength={25}
                                valid={validateClientData(client, { name: true })}
                                customStyles={LoginCss}
                            />
                        </div>
                        <div className={LoginCss.input}>
                            <InputField
                                ref={birthdayRef}
                                value={client.birthday}
                                type={'date'}
                                label={'Date of birth'}
                                autoComplete={'bday'}
                                required={true}
                                forceShowError={inputErrors.birthday}
                                disableForceError={disableForceError('birthday')}
                                onChange={onChange('birthday')}
                                onBlur={onBirthdayBlur}
                                min={minBday}
                                max={maxBday}
                                valid={validateClientData(client, { birthday: true })}
                                customStyles={LoginCss}
                            />
                        </div>
                        <div className={LoginCss.input}>
                            <InputField
                                value={client.email}
                                type={'text'}
                                label={'Email'}
                                autoComplete={'email'}
                                required={true}
                                forceShowError={inputErrors.email}
                                disableForceError={disableForceError('email')}
                                onChange={onEmailChange}
                                maxlength={40}
                                valid={validateClientData(client, { email: true })}
                                errorMessage={emailErrorMsg}
                                customStyles={LoginCss}
                            />
                        </div>
                        <div className={LoginCss.input}>
                            <InputField
                                value={client.telephone}
                                type={'text'}
                                label={'Phone number'}
                                placeholder={'+1 (___) ___ __ __'}
                                autoComplete={'tel'}
                                required={true}
                                forceShowError={inputErrors.telephone}
                                disableForceError={disableForceError('telephone')}
                                onChange={onTelChange}
                                maxlength={20}
                                valid={validateClientData(client, { telephone: true })}
                                errorMessage={telephoneErrorMsg}
                                customStyles={LoginCss}
                            />
                        </div>
                        <div className={`${LoginCss.input} ${LoginCss.password}`}>
                            <InputField
                                ref={passwordRef}
                                value={client.password}
                                type={passwordType}
                                label={'Password'}
                                autoComplete={'off'}
                                required={true}
                                forceShowError={inputErrors.password}
                                disableForceError={disableForceError('password')}
                                onChange={onPasswordChange}
                                maxlength={25}
                                valid={validateClientData(client, { password: true })}
                                showError={showPasswordError}
                                errorMessage={passwordErrorMsg}
                                customStyles={LoginCss}
                            />
                            <div
                                className={LoginCss.showPasswordIcon}
                                onClick={() =>
                                    setPasswordType(
                                        passwordType === 'password' ? 'text' : 'password'
                                    )
                                }
                                onMouseDown={() => {
                                    setShowPasswordError(false);
                                }}
                                onMouseUp={() => {
                                    passwordRef.current.focus();
                                    setShowPasswordError(true);
                                }}
                                onDragStart={(e) => e.preventDefault()}
                            >
                                <img
                                    src={passwordType === 'password' ? show : hide}
                                    alt='show password'
                                />
                            </div>
                        </div>
                        <div className={LoginCss.agree}>
                            <Checkbox
                                checked={termsAccepted}
                                onChange={setTermsAccepted}
                                leftAligned={true}
                                highlight={false}
                                pointer={false}
                                square={true}
                            >
                                {
                                    <div className={LoginCss.checkbox}>
                                        <p className={LoginCss.checkboxText}>
                                            {`I agree to the processing of my personal data and to
                                    the privacy policy, `}
                                        </p>
                                        <a
                                            className={LoginCss.checkboxDownload}
                                            href={termsAndConditions}
                                            download='terms-and-conditions.txt'
                                        >
                                            {`including the terms and conditions.`}
                                        </a>
                                    </div>
                                }
                            </Checkbox>
                        </div>
                        <div
                            className={LoginCss.button}
                            onClick={
                                allowSubmit
                                    ? null
                                    : () =>
                                          showError(defaultSubmitError, getEmptyFields())
                            }
                        >
                            <Button
                                text={'Sign up'}
                                submit={true}
                                notAllowed={!allowSubmit}
                                onClick={
                                    isLoading ? null : allowSubmit ? onFormSubmit : null
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
                    </form>
                </div>
            }
        />
    );

    function onChange(inputName) {
        return (value) =>
            setClient((prevClient) => ({ ...prevClient, [inputName]: value }));
    }

    function onEmailChange(value) {
        setEmailErrorMsg(value.length ? 'invalid email' : defaultInputError);
        onChange('email')(value);
    }

    function onTelChange(value) {
        setTelephoneErrorMsg(defaultInputError);
        const masked = IMask.createMask({
            mask: '+1 (000) 000 00 00',
        });
        const maskedValue = masked.resolve(value);
        onChange('telephone')(maskedValue);
    }

    function onPasswordChange(value) {
        console.log(value.length);
        setPasswordErrorMsg(
            value.length ? 'Password must be at least 4 symbols long' : defaultInputError
        );
        onChange('password')(value);
    }

    function onBirthdayBlur() {
        const enteredDate = dayjs(client.birthday);
        if (enteredDate.isValid && enteredDate.isBefore(minBday)) {
            setClient((prevClient) => ({ ...prevClient, birthday: minBday }));
        } else if (enteredDate.isValid && enteredDate.isAfter(maxBday)) {
            setClient((prevClient) => ({ ...prevClient, birthday: maxBday }));
        }
    }

    function disableForceError(field) {
        return () => setInputErrors((prevState) => ({ ...prevState, [field]: false }));
    }

    function getEmptyFields() {
        return Object.keys(client).filter(
            (key) => !validateClientData(client, { [key]: true })
        );
    }

    async function onFormSubmit() {
        try {
            setIsLoading(true);
            const serverURL = import.meta.env.VITE_SERVER_URL;
            const response = await fetch(serverURL + 'api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    surname: client.surname,
                    name: client.name,
                    birthday: client.birthday,
                    email: client.email,
                    telephone: client.telephone.match(/\d/g).slice(1).join(''),
                    password: client.password,
                }),
            });
            const result = await response.json();
            setIsLoading(false);
            if (response.status === 409) {
                if (
                    result.error.includes('Telephonw') &&
                    result.error.includes('email')
                ) {
                    showError(result.error, ['telephone', 'email']);
                } else if (result.error.includes('Telephone')) {
                    setTelephoneErrorMsg(result.error);
                    showError(result.error, ['telephone']);
                } else if (result.error.includes('Email')) {
                    setEmailErrorMsg(result.error);
                    showError(result.error, ['email']);
                }
            } else if (response.status === 200) {
                signIn({
                    token: result.token,
                    expiresIn: 30,
                    tokenType: 'Bearer',
                    authState: { name: result.name, surname: result.surname },
                });
                navigate('/myProfile', { replace: true });
            }
        } catch (error) {
            setIsLoading(false);
            showError('Error connecting to login server, try again later', null, 4500);
        }
    }
}

export default Register;
