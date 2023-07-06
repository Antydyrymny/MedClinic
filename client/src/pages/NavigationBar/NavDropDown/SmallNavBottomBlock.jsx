import SocialMedia from './SocialMedia';
import ModalFeedbackForm from '../../../components/Modal/ModalFeedbackForm';
import TelephoneCallingSvg from 'src/assets/Pictogram/TelephoneCallingSvg';
import Button from '../../../components/Button/Button';
import BottomCss from './SmallNavBottomBlock.module.css';

function SmallNavBottomBlock() {
    return (
        <div className={BottomCss.wrapper}>
            <div className={BottomCss.content}>
                <a className={BottomCss.telephone} href='tel:1234567'>
                    {'+1 (111) 123-45-67'}
                </a>
                <p className={BottomCss.time}>Available 24/7</p>
                <div className={BottomCss.modalButton}>
                    <ModalFeedbackForm
                        customButton={
                            <Button
                                customStyles={BottomCss}
                                colored={'empty'}
                                children={
                                    <div className={BottomCss.customBtnContent}>
                                        <TelephoneCallingSvg />
                                        <div className={BottomCss.customButtonText}>
                                            requst a callback
                                        </div>
                                    </div>
                                }
                            />
                        }
                        feedbackHeading={'Call me back'}
                        feedbackText={
                            'Leave a request and our manager will contact you shortly'
                        }
                        sendButtonText={'Send request'}
                        onSuccessMessage={'We will call you back shortly.'}
                    />
                </div>
                <SocialMedia />
            </div>
        </div>
    );
}

export default SmallNavBottomBlock;
