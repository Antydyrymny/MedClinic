import { useState } from 'react';
import FeedbackSuccess from './FeedbackSuccess';
import InputField from '../InputField/InputField';
import Textarea from '../Textarea/Textarea';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
import termsAndConditions from 'src/assets/Example terms and conditions.txt';
import IMask from 'imask';
import { validateClientData } from 'src/utils/ValidateClientData';
import FeedbackCss from './Feedback.module.css';

function Feedback({
    closeModal,
    termsAccepted,
    setTermsAccepted,
    isSent,
    setIsSent,
    heading,
    text,
    sendButtonText,
    onSuccessMessage,
}) {
    const [clientData, setClientData] = useState({
        name: '',
        telephone: '',
        comment: '',
    });
    const allowConfirm =
        termsAccepted &&
        validateClientData(clientData, {
            telephone: true,
        });

    return (
        <div className={FeedbackCss.wrapper}>
            <div
                className={FeedbackCss.close}
                onClick={() => {
                    setIsSent(false);
                    closeModal();
                }}
            >
                <img src={'/src/assets/Pictogram/close20px.png'} alt={'close'} />
            </div>
            {isSent ? (
                <FeedbackSuccess message={onSuccessMessage} />
            ) : (
                <>
                    <h2 className={FeedbackCss.heading}>{heading}</h2>
                    <p className={FeedbackCss.text}>{text}</p>
                    <form className={FeedbackCss.form}>
                        <div className={FeedbackCss.input}>
                            <InputField
                                value={clientData.name}
                                type={'text'}
                                label={'Name'}
                                onChange={onChange('name')}
                                maxlength={20}
                                customStyles={FeedbackCss}
                            />
                        </div>
                        <div className={FeedbackCss.input}>
                            <InputField
                                value={clientData.telephone}
                                type={'tel'}
                                label={'Phone number*'}
                                placeholder={'+1 (___) ___ __ __'}
                                required={true}
                                onChange={onTelChange}
                                maxlength={18}
                                valid={validateClientData(clientData, {
                                    telephone: true,
                                })}
                                errorMessage={'Please enter your phone number'}
                                customStyles={FeedbackCss}
                            />
                        </div>
                        <div className={FeedbackCss.textArea}>
                            <Textarea
                                value={clientData.comment}
                                placeholder={'Leave a comment'}
                                onChange={onChange('comment')}
                                rows={5}
                                customStyles={FeedbackCss}
                            />
                        </div>
                    </form>
                    <div className={FeedbackCss.confirm}>
                        <Button
                            text={sendButtonText}
                            submit={true}
                            colored={'active'}
                            notAllowed={!allowConfirm}
                            onClick={() => setIsSent(true)}
                        />
                    </div>
                    <div className={FeedbackCss.agree}>
                        <Checkbox
                            checked={termsAccepted}
                            onChange={(boolean) => setTermsAccepted(boolean)}
                            leftAligned={true}
                            highlight={false}
                            pointer={false}
                        >
                            {
                                <div className={FeedbackCss.checkbox}>
                                    <p className={FeedbackCss.checkboxText}>
                                        {`I agree to the processing of my personal data and to
                                    the privacy policy, `}
                                    </p>
                                    <a
                                        className={FeedbackCss.checkboxDownload}
                                        href={termsAndConditions}
                                        download='terms-and-conditions.txt'
                                    >
                                        {`including the terms and conditions.`}
                                    </a>
                                </div>
                            }
                        </Checkbox>
                    </div>
                </>
            )}
        </div>
    );

    function onChange(inputName) {
        return (value) =>
            setClientData((prevClient) => ({ ...prevClient, [inputName]: value }));
    }

    function onTelChange(value) {
        const masked = IMask.createMask({
            mask: '+1 (000) 000 00 00',
        });
        const maskedValue = masked.resolve(value);
        onChange('telephone')(maskedValue);
    }
}

export default Feedback;
