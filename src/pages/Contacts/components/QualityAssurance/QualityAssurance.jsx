import { useState, useRef } from 'react';
import Modal from '../../../../components/Modal/Modal';
import Feedback from '../../../../components/Feedback/Feedback';
import Button from '../../../../components/Button/Button';
import QualityAssuranceCss from './QualityAssurance.module.css';

function QualityAssurance() {
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const modal = useRef(null);

    return (
        <div className={QualityAssuranceCss.wrapper}>
            <div className={QualityAssuranceCss.mainBlock}>
                <h4 className={QualityAssuranceCss.heading}>Quality Assurance 👌</h4>
                <p>
                    If you have any questions or suggestions regarding the improvement of
                    our work, the quality of the services provided, the organization of
                    our service, or if you would like to express gratitude to our
                    employees, please contact us by phone at +1 (111) 111-11-11 or email
                    us at
                    <a
                        className={QualityAssuranceCss.email}
                        href='mailto:care@fullstack_noSuchEmail.com'
                        type='email'
                    >
                        {' care@fullstack.com'}
                    </a>
                </p>
            </div>

            <Modal
                modal={modal}
                onClose={() => {
                    setTermsAccepted(false);
                    setIsSent(false);
                }}
                openButton={
                    <div className={QualityAssuranceCss.button}>
                        <Button
                            text={'leave review'}
                            colored={'lightBlue'}
                            customStyles={QualityAssuranceCss}
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
                        heading={'Write a Review'}
                        text={`If you would like to share your feedback, please provide your full
                        name, contact phone number, and the details of your review.`}
                    />
                }
            />
        </div>
    );
}

export default QualityAssurance;
