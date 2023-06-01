import { useState, useRef } from 'react';
import Modal from './Modal';
import Feedback from '../Feedback/Feedback';
import Button from '../Button/Button';

function ModalFeedbackForm({
    buttonText,
    buttonColor,
    feedbackHeading,
    feedbackText,
    customBtnWrapper,
}) {
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const modal = useRef(null);

    return (
        <Modal
            modal={modal}
            onClose={() => {
                setTermsAccepted(false);
                setIsSent(false);
            }}
            openButton={
                <div>
                    <Button
                        text={buttonText}
                        colored={buttonColor}
                        customStyles={customBtnWrapper}
                    />
                </div>
            }
            content={
                <Feedback
                    closeModal={() => modal.current.close()}
                    termsAccepted={termsAccepted}
                    setTermsAccepted={setTermsAccepted}
                    isSent={isSent}
                    setIsSent={setIsSent}
                    heading={feedbackHeading}
                    text={feedbackText}
                />
            }
        />
    );
}

export default ModalFeedbackForm;
