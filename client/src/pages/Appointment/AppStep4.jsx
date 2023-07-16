import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useIsAuthenticated, useAuthUser } from 'react-auth-kit';
import useRedirect from '../../hooks/useRedirect';
import AppSummary from './components/AppSummary/AppSummary';
import useGetShowSubmitError from '../../hooks/useGetShowSubmitError';
import ClientForm from './components/ClientForm/ClientForm';
import Button from '../../components/Button/Button';
import BackButton from './components/BackButton/BackButton';
import HomeButton from './components/HomeButton/HomeButton';
import Modal from '../../components/Modal/Modal';
import { validateClientData } from 'src/utils/validateClientData';
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

function AppStep4() {
    const location = useLocation();
    const isAuthenticated = useIsAuthenticated();
    const auth = useAuthUser();
    let finalLocation = null;
    if (isAuthenticated()) finalLocation = `/app/${auth().name}/step4`;
    useRedirect(finalLocation, isAuthenticated && location.pathname !== finalLocation);

    const [client, setClient] = useState(clientSchema);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const allowSubmit =
        termsAccepted &&
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

    const modalRef = useRef(null);
    const [timeslotAlreadyBookedError, setTimeslotAlreadyBookedError] = useState(false);

    return (
        <div className={AppStep4Css.wrapper}>
            <form
                onSubmit={
                    isLoading
                        ? null
                        : allowSubmit
                        ? onFormSubmit
                        : () => showError(defaultSubmitError, getEmptyFields())
                }
            >
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
                                    : () =>
                                          showError(defaultSubmitError, getEmptyFields())
                            }
                        >
                            <Button
                                text={'CONFIRM'}
                                submit={true}
                                colored={'active'}
                                notAllowed={!allowSubmit}
                                onClick={
                                    isLoading ? null : allowSubmit ? onFormSubmit : null
                                }
                            />
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
                                allowSubmit ? null : () => showError(defaultSubmitError)
                            }
                        >
                            <Button
                                text={'CONFIRM'}
                                submit={true}
                                colored={'active'}
                                notAllowed={!allowSubmit}
                                onClick={
                                    isLoading ? null : allowSubmit ? onFormSubmit : null
                                }
                            />
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
                content={
                    timeslotAlreadyBookedError ? (
                        <div>You will be redirected</div>
                    ) : (
                        <div>Final result</div>
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

    function onFormSubmit() {}
}

export default AppStep4;
