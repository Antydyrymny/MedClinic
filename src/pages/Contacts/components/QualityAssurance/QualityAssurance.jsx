import ModalFeedbackForm from 'src/components/Modal/ModalFeedbackForm';
import QualityAssuranceCss from './QualityAssurance.module.css';

function QualityAssurance() {
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
            <ModalFeedbackForm
                buttonText={'leave review'}
                buttonColor={'lightBlue'}
                feedbackHeading={'Write a Review'}
                feedbackText={`If you would like to share your feedback, please provide your full
                        name, contact phone number, and the details of your review.`}
                customBtnWrapper={QualityAssuranceCss}
            />
        </div>
    );
}

export default QualityAssurance;
