import { useState, useRef } from 'react';
import AppSummary from './components/AppSummary/AppSummary';
import useGetShowSubmitError from '../../hooks/useGetShowSubmitError';
import ClientForm from './components/ClientForm/ClientForm';
import Button from '../../components/Button/Button';
import BackButton from './components/BackButton/BackButton';
import HomeButton from './components/HomeButton/HomeButton';
import { validateClientData } from 'src/utils/validateClientData';
import AppStep4Css from './AppStep4.module.css';

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
const defaultError = 'Please, fill all fields and agree to terms and conditions';

function AppStep4() {
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

    const [inputErrors, setInputErrors] = useState(errorSchema);

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
        <div className={AppStep4Css.wrapper}>
            <form
                onSubmit={
                    allowSubmit
                        ? onFormSubmit
                        : () => showError(defaultError, getEmptyFields())
                }
            >
                <div className={AppStep4Css.main}>
                    <div className={AppStep4Css.summary}>
                        <h4 className={AppStep4Css.heading}>appointment summary</h4>
                        <AppSummary />
                    </div>
                    <div className={AppStep4Css.info}>
                        <h4 className={AppStep4Css.heading}>enter your details</h4>
                        <ClientForm
                            clientData={[client, setClient]}
                            termsAcceptedData={[termsAccepted, setTermsAccepted]}
                            inputErrorsState={[inputErrors, setInputErrors]}
                        />
                    </div>
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
                                    : () => showError(defaultError, getEmptyFields())
                            }
                        >
                            <Button
                                text={'CONFIRM'}
                                submit={true}
                                colored={'active'}
                                notAllowed={!allowSubmit}
                                onClick={allowSubmit ? onFormSubmit : null}
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
                            onClick={allowSubmit ? null : () => showError(defaultError)}
                        >
                            <Button
                                text={'CONFIRM'}
                                submit={true}
                                colored={'active'}
                                notAllowed={!allowSubmit}
                                onClick={allowSubmit ? onFormSubmit : null}
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
