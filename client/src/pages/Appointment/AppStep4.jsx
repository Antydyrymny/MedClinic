import { useState, useRef, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useIsAuthenticated, useAuthUser, useSignIn } from 'react-auth-kit';
import Cookies from 'js-cookie';
import useRedirect from '../../hooks/useRedirect';
import { AppointmentFilterContext } from 'src/context/AppointmentFilterContext';
import AppSummary from './components/AppSummary/AppSummary';
import useGetShowSubmitError from '../../hooks/useGetShowSubmitError';
import ClientForm from './components/ClientForm/ClientForm';
import Button from '../../components/Button/Button';
import BackButton from './components/BackButton/BackButton';
import HomeButton from './components/HomeButton/HomeButton';
import Modal from '../../components/Modal/Modal';
import FeedbackSuccess from '../../components/Feedback/FeedbackSuccess';
import { validateClientData } from 'src/utils/validateClientData';
import LoadingSpinner from '../../assets/Pictogram/LoadingSpinner';
import AppStep4Css from './AppStep4.module.css';

const defaultInputError = 'Fill in the required field';

const clientSchema = {
    surname: '',
    name: '',
    birthday: '',
    email: '',
    telephone: '',
    comment: '',
};
const errorSchema = {
    surname: false,
    name: false,
    birthday: false,
    email: false,
    telephone: false,
};
const defaultSubmitError = 'Please, fill all fields and agree to terms and conditions';
const submitErrorIfAuthenticated = 'Please, agree to terms and conditions';

function AppStep4() {
    const location = useLocation();
    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated();
    const signIn = useSignIn();
    const auth = useAuthUser();
    let finalLocation = null;
    if (isAuthenticated()) finalLocation = `/app/${auth().name}/step4`;
    const [newProfileCreated, setNewProfileCreated] = useState(false);
    useRedirect(
        finalLocation,
        isAuthenticated && !newProfileCreated && location.pathname !== finalLocation
    );

    const [appParams, setAppParams] = useContext(AppointmentFilterContext);
    const [client, setClient] = useState(clientSchema);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const allowSubmit = isAuthenticated()
        ? termsAccepted
        : termsAccepted &&
          validateClientData(client, {
              surname: true,
              name: true,
              birthday: true,
              email: true,
              telephone: true,
          });

    const [emailErrorMsg, setEmailErrorMsg] = useState(defaultInputError);
    const [telephoneErrorMsg, setTelephoneErrorMsg] = useState(defaultInputError);

    const [inputErrors, setInputErrors] = useState(errorSchema);

    const [isLoading, setIsLoading] = useState(false);

    const [errorMessage, setErrorMessage] = useState(
        isAuthenticated() ? submitErrorIfAuthenticated : defaultSubmitError
    );
    const showSubmitErrorTimerRef = useRef(null);
    const [isShowingSubmitError, setIsShowingSubmitError] = useState(false);
    const showError = useGetShowSubmitError({
        setErrorMessage,
        showSubmitErrorTimerRef,
        setIsShowingSubmitError,
        allowSubmit,
        setInputErrors,
    });

    const modalRef = useRef(null);
    const [timeslotAlreadyBookedError, setTimeslotAlreadyBookedError] = useState(false);

    // cleanup redirect timeouts
    const timerIdRef = useRef(null);
    useEffect(() => {
        function onUnload() {
            clearTimeout(timerIdRef.current);
            window.removeEventListener('beforeunload', onUnload);
        }

        window.addEventListener('beforeunload', onUnload);
        return () => onUnload();
    }, []);

    return (
        <div className={AppStep4Css.wrapper}>
            <form onSubmit={getOnSubmitHandler()}>
                <div
                    className={`${AppStep4Css.main} ${
                        isAuthenticated() ? AppStep4Css.mainAuthenticated : null
                    }`}
                >
                    {isAuthenticated() ? (
                        <div className={AppStep4Css.mainContentAuthenticated}>
                            <div className={AppStep4Css.summaryAuthenticated}>
                                <h4 className={AppStep4Css.heading}>
                                    appointment summary
                                </h4>
                                <AppSummary
                                    clientSurname={auth().surname}
                                    clientName={auth().name}
                                />
                            </div>
                            <div className={AppStep4Css.infoAuthenticated}>
                                <ClientForm
                                    clientData={[client, setClient]}
                                    termsAcceptedData={[termsAccepted, setTermsAccepted]}
                                    isAuthenticated={true}
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className={AppStep4Css.summary}>
                                <h4 className={AppStep4Css.heading}>
                                    appointment summary
                                </h4>
                                <AppSummary />
                            </div>
                            <div className={AppStep4Css.info}>
                                <h4 className={AppStep4Css.heading}>
                                    enter your details
                                </h4>
                                <ClientForm
                                    clientData={[client, setClient]}
                                    termsAcceptedData={[termsAccepted, setTermsAccepted]}
                                    inputErrors={inputErrors}
                                    setInputErrors={setInputErrors}
                                    emailErrorMsg={emailErrorMsg}
                                    setEmailErrorMsg={setEmailErrorMsg}
                                    telephoneErrorMsg={telephoneErrorMsg}
                                    setTelephoneErrorMsg={setTelephoneErrorMsg}
                                    defaultInputError={defaultInputError}
                                />
                            </div>
                        </>
                    )}
                </div>
                <div className={AppStep4Css.footer}>
                    <div className={AppStep4Css.back}>
                        <BackButton to={'/app/step3'} />
                    </div>
                    <div className={AppStep4Css.confirm}>
                        <div
                            className={AppStep4Css.confirmButton}
                            onClick={
                                allowSubmit
                                    ? null
                                    : isAuthenticated()
                                    ? () => showError(submitErrorIfAuthenticated)
                                    : () =>
                                          showError(defaultSubmitError, getEmptyFields())
                            }
                        >
                            <Button
                                text={'CONFIRM'}
                                submit={true}
                                colored={'active'}
                                notAllowed={!allowSubmit}
                                onClick={getOnSubmitHandler(true)}
                            />
                            <div
                                className={`${AppStep4Css.loading} ${
                                    isLoading ? AppStep4Css.isLoading : null
                                }`}
                            >
                                <LoadingSpinner text={false} customStyles={AppStep4Css} />
                            </div>
                            <div
                                className={`${AppStep4Css.submitError} ${
                                    isShowingSubmitError
                                        ? AppStep4Css.submitErrorShow
                                        : null
                                }`}
                            >
                                {errorMessage}
                            </div>
                        </div>
                    </div>
                    <div className={AppStep4Css.home}>
                        <HomeButton />
                    </div>
                </div>
                <div className={AppStep4Css.footerMobile}>
                    <div className={AppStep4Css.footer}>
                        <div
                            className={AppStep4Css.confirmMobile}
                            onClick={
                                allowSubmit
                                    ? null
                                    : isAuthenticated()
                                    ? () => showError(submitErrorIfAuthenticated)
                                    : () =>
                                          showError(defaultSubmitError, getEmptyFields())
                            }
                        >
                            <Button
                                text={'CONFIRM'}
                                submit={true}
                                colored={'active'}
                                notAllowed={!allowSubmit}
                                onClick={getOnSubmitHandler(true)}
                            />
                            <div
                                className={`${AppStep4Css.loading} ${
                                    isLoading ? AppStep4Css.isLoading : null
                                }`}
                            >
                                <LoadingSpinner text={false} customStyles={AppStep4Css} />
                            </div>
                            <div
                                className={`${AppStep4Css.submitErrorMobile} ${
                                    isShowingSubmitError
                                        ? AppStep4Css.submitErrorShow
                                        : null
                                }`}
                            >
                                {errorMessage}
                            </div>
                        </div>
                    </div>
                    <div className={AppStep4Css.back}>
                        <BackButton to={'/app/step3'} />
                    </div>
                    <div className={AppStep4Css.home}>
                        <HomeButton />
                    </div>
                </div>
            </form>
            <Modal
                modal={modalRef}
                onClose={
                    timeslotAlreadyBookedError
                        ? onTimeslotAlreadyBookedError
                        : () => navigate('/myProfile')
                }
                content={
                    timeslotAlreadyBookedError ? (
                        <FeedbackSuccess
                            message={'Unfortunately, timeslot is already booked'}
                            children={
                                <p className={AppStep4Css.modal}>
                                    Redirecting to the timeslot selection step
                                </p>
                            }
                            fail={true}
                        />
                    ) : newProfileCreated ? (
                        <FeedbackSuccess
                            message={'Your appointment has been successfully scheduled!'}
                            children={
                                <>
                                    <p className={AppStep4Css.modal}>
                                        New Profile account was created for you with sign
                                        in information set to your email and telephone
                                        number
                                    </p>
                                    <p className={AppStep4Css.modal}>
                                        You will be redirected to your Profile shortly
                                    </p>
                                </>
                            }
                        />
                    ) : (
                        <FeedbackSuccess
                            message={'Your appointment has been successfully scheduled!'}
                            children={
                                <p className={AppStep4Css.modal}>
                                    You will be redirected to your Profile shortly
                                </p>
                            }
                        />
                    )
                }
            />
        </div>
    );

    function getEmptyFields() {
        return Object.keys(client).filter(
            (key) => !validateClientData(client, { [key]: true })
        );
    }

    function getOnSubmitHandler(button = false) {
        if (isLoading) return null;
        else if (isAuthenticated()) {
            return allowSubmit
                ? onAuthFormSubmit
                : button
                ? null
                : () => showError(submitErrorIfAuthenticated);
        } else
            return allowSubmit
                ? onNonAuthFormSubmit
                : button
                ? null
                : () => showError(defaultSubmitError, getEmptyFields());
    }

    function onTimeslotAlreadyBookedError() {
        setAppParams({ ...appParams, time: null, date: null });
        navigate('/app/step3');
    }

    async function onNonAuthFormSubmit() {
        try {
            setIsLoading(true);
            const serverURL = import.meta.env.VITE_SERVER_URL;
            const response = await fetch(serverURL + 'api/newClientAppointment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: client.name,
                    surname: client.surname,
                    birthday: client.birthday,
                    email: client.email,
                    telephone: client.telephone.match(/\d/g).slice(1).join(''),
                    docId: appParams.doctorId,
                    date: appParams.date,
                    time: appParams.time,
                    followUp: appParams.followUp,
                    specialityId: appParams.specialityId,
                    onlineAppointment: appParams.onlineAppointment,
                    clinicId: appParams.clinicId,
                }),
            });
            const result = await response.json();

            setIsLoading(false);
            if (response.status === 400) {
                showError(result.error);
            } else if (response.status === 409) {
                if (
                    result.error.includes('Telephonw') &&
                    result.error.includes('email')
                ) {
                    setTelephoneErrorMsg(result.error);
                    setEmailErrorMsg(result.error);
                    showError(result.error, ['telephone', 'email']);
                } else if (result.error.includes('Telephone')) {
                    setTelephoneErrorMsg(result.error);
                    showError(result.error, ['telephone']);
                } else if (result.error.includes('Email')) {
                    setEmailErrorMsg(result.error);
                    showError(result.error, ['email']);
                } else if (result.error === 'Appointment slot is already booked') {
                    setTimeslotAlreadyBookedError(true);
                    modalRef.current.showModal();
                    setTimeout(
                        () => setAppParams({ ...appParams, time: null, date: null }),
                        4000
                    );
                    timerIdRef.current = setTimeout(() => navigate('/app/step3'), 4000);
                }
            } else if (response.status === 200) {
                setNewProfileCreated(true);
                signIn({
                    token: result.token,
                    expiresIn: 30,
                    tokenType: 'Bearer',
                    authState: { name: result.name, surname: result.surname },
                });
                modalRef.current.showModal();
                timerIdRef.current = setTimeout(() => navigate('/myProfile'), 5000);
            }
        } catch (error) {
            setIsLoading(false);
            showError('Error connecting to login server, try again later', null, 4500);
        }
    }

    async function onAuthFormSubmit() {
        try {
            setIsLoading(true);
            const serverURL = import.meta.env.VITE_SERVER_URL;
            const headers = new Headers();

            headers.append('Authorization', `Bearer ${Cookies.get('_auth')}`);
            headers.append('Content-Type', 'application/json');
            const response = await fetch(serverURL + 'api/authAppointment', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    docId: appParams.doctorId,
                    date: appParams.date,
                    time: appParams.time,
                    followUp: appParams.followUp,
                    specialityId: appParams.specialityId,
                    onlineAppointment: appParams.onlineAppointment,
                    clinicId: appParams.clinicId,
                }),
            });

            const result = await response.json();
            setIsLoading(false);
            if (response.status === 400) {
                showError(result.error);
            } else if (response.status === 409) {
                setTimeslotAlreadyBookedError(true);
                modalRef.current.showModal();
                setTimeout(() => onTimeslotAlreadyBookedError(), 4000);
            } else if (response.status === 200) {
                modalRef.current.showModal();
                timerIdRef.current = setTimeout(() => navigate('/myProfile'), 4000);
            }
        } catch (error) {
            setIsLoading(false);
            showError('Error connecting to login server, try again later', null, 4500);
        }
    }
}

export default AppStep4;
