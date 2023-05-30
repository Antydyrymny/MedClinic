import SuccessCss from './FeedbackSuccess.module.css';

function FeedbackSuccess() {
    return (
        <div className={SuccessCss.wrapper}>
            <img
                className={SuccessCss.image}
                src={'src/assets/Pictogram/valid128px.png'}
                alt={'Feedback sent'}
            />
            <h2 className={SuccessCss.heading}>THANK YOU!</h2>
            <p className={SuccessCss.text}> Your opinion is important to us.</p>
        </div>
    );
}

export default FeedbackSuccess;
