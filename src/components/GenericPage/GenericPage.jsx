import { useState } from 'react';
import useGetScreenWidth from '../../hooks/useGetScreenWidth';
import LoadingSpinner from '../../assets/Pictogram/LoadingSpinner';
import ModalFeedbackForm from '../Modal/ModalFeedbackForm';
import Button from '../Button/Button';
import ScrollDownArrow from '../ScrollDownArrow/ScrollDownArrow';
import PageCss from './GenericPage.module.css';

function GenericPage({
    children,
    buttonText,
    buttonColor,
    onButtonClick,
    customBtnWrapper,
    linkTo = null,
    modalButtonText,
    modalButtonColor,
    modalFeedbackHeading,
    modalFeedbackText,
    modalOnSuccessMessage,
    modalSendButtonText,
    modalCustomBtnWrapper,
    mainTitle,
    subTitle,
}) {
    const [loading, setLoading] = useState(true);
    const screenWidth = useGetScreenWidth();

    return (
        <>
            {loading && <LoadingSpinner />}
            <div className={PageCss.wrapper}>
                <div className={PageCss.introBlock}>
                    <div className={PageCss.mediaBlock}>
                        <video
                            className={PageCss.video}
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            poster={'src/assets/images/about.png'}
                            onLoad={() => setLoading(false)}
                        >
                            <source src={'src/assets/video/mainIntro.mp4'} />
                            <source
                                src={'src/assets/video/mainIntro.ogv'}
                                type={'video/ogv'}
                            />
                        </video>
                        <img
                            className={PageCss.img}
                            src={'src/assets/images/about.png'}
                            alt={'main theme'}
                            onLoad={() => setLoading(false)}
                        />
                    </div>
                    <div className={PageCss.headings}>
                        <h1 className={PageCss.mainTitle}>{mainTitle}</h1>
                        <p className={PageCss.subTitle}>{subTitle}</p>
                        <div className={PageCss.button}>
                            {buttonText ? (
                                linkTo ? (
                                    <a href={linkTo} className={PageCss.buttonAnchor}>
                                        <Button
                                            text={buttonText}
                                            colored={buttonColor}
                                            customStyles={customBtnWrapper}
                                        />
                                    </a>
                                ) : (
                                    <Button
                                        text={buttonText}
                                        onClick={onButtonClick}
                                        colored={buttonColor}
                                        customStyles={customBtnWrapper}
                                    />
                                )
                            ) : (
                                <ModalFeedbackForm
                                    buttonText={modalButtonText}
                                    buttonColor={modalButtonColor}
                                    feedbackHeading={modalFeedbackHeading}
                                    feedbackText={modalFeedbackText}
                                    sendButtonText={modalSendButtonText}
                                    onSuccessMessage={modalOnSuccessMessage}
                                    customBtnWrapper={modalCustomBtnWrapper}
                                />
                            )}
                        </div>
                    </div>
                    <ScrollDownArrow
                        to={'mainContent'}
                        offset={screenWidth > 1200 ? -70 : -50}
                    />
                </div>
                <div className={PageCss.bottomBar}>
                    <a href='/app/step1'>{`schedule  an  appointment`}</a>
                </div>
                <div id='mainContent' className={PageCss.children}>
                    {children}
                </div>
            </div>
        </>
    );
}

export default GenericPage;
