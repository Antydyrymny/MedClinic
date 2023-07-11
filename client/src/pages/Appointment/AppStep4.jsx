import { useState, useRef } from 'react';
import AppSummary from './components/AppSummary/AppSummary';
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

function AppStep4() {
    const [client, setClient] = useState(clientSchema);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const formRef = useRef(null);
    const allowSubmit =
        termsAccepted &&
        validateClientData(client, {
            surname: true,
            name: true,
            birthday: true,
            email: true,
            telephone: true,
        });

    return (
        <div className={AppStep4Css.wrapper}>
            <form
                ref={formRef}
                onSubmit={(e) => {
                    console.log('submited');
                    e.preventDefault();
                }}
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
                            notAllowed={!allowSubmit}
                            onClick={() => formRef.current.submit()}
                        />
                    </div>
                    <div className={AppStep4Css.home}>
                        <HomeButton />
                    </div>
                </div>
                <div className={AppStep4Css.footerMobile}>
                    <div className={AppStep4Css.footer}>
                        <div className={AppStep4Css.confirmMobile}>
                            <Button
                                text={'CONFIRM'}
                                submit={true}
                                colored={'active'}
                                notAllowed={!allowSubmit}
                            />
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
}

export default AppStep4;
