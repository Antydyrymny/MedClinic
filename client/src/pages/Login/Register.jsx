import { useState, useRef, useEffect } from 'react';
import { useSignIn, useIsAuthenticated } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import IMask from 'imask';
import useRedirect from '../../hooks/useRedirect';
import LoginPageWrapperComponent from './LoginPageWrapperComponent';
import { validateClientData } from '../../utils/validateClientData';
import termsAndConditions from 'src/assets/Example terms and conditions.txt';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Checkbox from '../../components/Checkbox/Checkbox';
import show from '../../assets/Pictogram/show.png';
import hide from '../../assets/Pictogram/hide.png';
import dayjs from 'dayjs';
import LoginCss from './Login.module.css';

const clientSchema = {
    surname: '',
    name: '',
    birthday: '',
    email: '',
    telephone: '',
    password: '',
};

function Register() {
    const signIn = useSignIn();
    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated();
    useRedirect('/myProfile', isAuthenticated());

    const [client, setClient] = useState(clientSchema);
    const minBday = dayjs()
        .year(dayjs().year() - 100)
        .format('YYYY-MM-DD');
    const maxBday = dayjs().format('YYYY-MM-DD');
    const [passwordType, setPasswordType] = useState('password');
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
    const [isShowingError, setIsShowingError] = useState(null);
    const showErrorTimerRef = useRef(null);

    useEffect(() => {
        if (allowSubmit) setIsShowingError(() => false);
    }, [allowSubmit]);

    return (
        <LoginPageWrapperComponent
            children={
                <div className={LoginCss.wrapper}>
                    <p className={LoginCss.subheading}>Sign up</p>
                    <form
                        className={LoginCss.form}
                        onSubmit={allowSubmit ? onFormSubmit : null}
                    >
                        <div className={LoginCss.input}>
                            <InputField
                                value={client.surname}
                                type={'text'}
                                label={'Surname'}
                                autoComplete={'family-name'}
                                required={true}
                                onChange={onChange('surname')}
                                maxlength={20}
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
                                onChange={onChange('name')}
                                maxlength={20}
                                valid={validateClientData(client, { name: true })}
                                customStyles={LoginCss}
                            />
                        </div>
                        <div className={LoginCss.input}>
                            <InputField
                                value={client.birthday}
                                type={'date'}
                                label={'Date of birth'}
                                autoComplete={'bday'}
                                required={true}
                                onChange={onChange('birthday')}
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
                                onChange={onChange('email')}
                                maxlength={20}
                                valid={validateClientData(client, { email: true })}
                                errorMessage={'Invalid email'}
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
                                onChange={onTelChange}
                                maxlength={20}
                                valid={validateClientData(client, { telephone: true })}
                                customStyles={LoginCss}
                            />
                        </div>
                        <div className={`${LoginCss.input} ${LoginCss.passport}`}>
                            <InputField
                                value={client.password}
                                type={passwordType}
                                label={'Password'}
                                autoComplete={'off'}
                                required={true}
                                onChange={onChange('password')}
                                maxlength={20}
                                valid={validateClientData(client, { password: true })}
                                errorMessage={
                                    'Password must be at least 4 characters long'
                                }
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
                            onClick={allowSubmit ? null : showError}
                        >
                            <Button
                                text={'Sign up'}
                                submit={true}
                                notAllowed={!allowSubmit}
                                onClick={allowSubmit ? onFormSubmit : null}
                                customStyles={LoginCss}
                            />
                            <div
                                className={`${LoginCss.submitError} ${
                                    isShowingError ? LoginCss.submitErrorShow : null
                                }`}
                            >
                                Please, fill all fields and agree to terms and conditions
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

    function onTelChange(value) {
        const masked = IMask.createMask({
            mask: '+1 (000) 000 00 00',
        });
        const maskedValue = masked.resolve(value);
        onChange('telephone')(maskedValue);
    }

    function onFormSubmit() {
        signIn({
            token: 1,
            expiresIn: 30,
            tokenType: 'Bearer',
            authState: { name: 'JimBob' },
        });
        navigate('/myProfile', { replace: true });
    }

    function showError() {
        clearTimeout(showErrorTimerRef.current);
        setIsShowingError(true);
        showErrorTimerRef.current = setTimeout(
            () => setIsShowingError(() => false),
            3500
        );
    }
}

export default Register;
