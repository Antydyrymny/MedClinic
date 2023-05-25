import { useState } from 'react';
import AppSummary from './components/AppSummary/AppSummary';
import ClientForm from './components/ClientForm/ClientForm';
import Button from '../../components/Button/Button';
import BackButton from './components/BackButton/BackButton';
import { validateClientData } from 'src/utils/ValidateClientData';
import AppStep4Css from './AppStep4.module.css';

const clientSchema = {
    surname: '',
    name: '',
    birthday: '',
    email: '',
    telephone: '',
    comment: '',
};

function AppStep4() {
    const [client, setClient] = useState(clientSchema);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const allowConfirm =
        termsAccepted &&
        validateClientData(client, {
            surname: true,
            name: true,
            birthday: true,
            telephone: true,
        });

    return (
        <div className={AppStep4Css.wrapper}>
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
                    />
                </div>
            </div>
            <div className={AppStep4Css.footer}>
                <div className={AppStep4Css.back}>
                    <BackButton to={'/app/step3'} />
                </div>
                <div className={AppStep4Css.confirm}>
                    <Button
                        text={'CONFIRM'}
                        submit={true}
                        colored={'active'}
                        notAllowed={!allowConfirm}
                    />
                </div>
            </div>
            <div className={AppStep4Css.footerMobile}>
                <div className={AppStep4Css.footer}>
                    <div className={AppStep4Css.confirmMobile}>
                        <Button
                            text={'CONFIRM'}
                            submit={true}
                            colored={'active'}
                            notAllowed={!allowConfirm}
                        />
                    </div>
                </div>
                <div className={AppStep4Css.back}>
                    <BackButton to={'/app/step3'} />
                </div>
            </div>
        </div>
    );
}

export default AppStep4;
