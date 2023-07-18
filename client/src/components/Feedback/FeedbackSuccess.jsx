import valid128px from 'src/assets/Pictogram/valid128px.png';
import failure128px from 'src/assets/Pictogram/failure128px.png';
import SuccessCss from './FeedbackSuccess.module.css';

function FeedbackSuccess({ message, children, fail = false }) {
    return (
        <div className={SuccessCss.wrapper}>
            <img
                className={SuccessCss.image}
                src={fail ? failure128px : valid128px}
                alt={'Feedback sent'}
            />
            <h2 className={SuccessCss.heading}>{fail ? 'SORRY!' : 'THANK YOU!'}</h2>
            <p className={SuccessCss.text}>{message}</p>
            {children}
        </div>
    );
}

export default FeedbackSuccess;
