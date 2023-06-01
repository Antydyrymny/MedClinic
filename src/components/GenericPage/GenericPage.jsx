import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import LoadingSpinner from '../../assets/Pictogram/LoadingSpinner';
import ModalFeedbackForm from '../Modal/ModalFeedbackForm';
import Button from '../Button/Button';
import DropDownSvg from '../../assets/Pictogram/DropDownSvg';
import PageCss from './GenericPage.module.css';

function GenericPage({
    children,
    buttonText,
    buttonColor,
    onBtnClick,
    customBtnWrapper,
    modalButtonText,
    modalButtonColor,
    modalFeedbackHeading,
    modalFeedbackText,
    modalCustomBtnWrapper,
    mainTitle,
    subTitle,
}) {
    const [loading, setLoading] = useState(true);

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
                                <Button
                                    text={buttonText}
                                    onClick={onBtnClick}
                                    colored={buttonColor}
                                    customStyles={customBtnWrapper}
                                />
                            ) : (
                                <ModalFeedbackForm
                                    buttonText={modalButtonText}
                                    buttonColor={modalButtonColor}
                                    feedbackHeading={modalFeedbackHeading}
                                    feedbackText={modalFeedbackText}
                                    customBtnWrapper={modalCustomBtnWrapper}
                                />
                            )}
                        </div>
                    </div>
                    <div className={PageCss.bottomArrow} onClick={null}>
                        <ScrollLink
                            to={'mainContent'}
                            spy={true}
                            smooth={true}
                            offset={-112}
                            duration={800}
                        >
                            <DropDownSvg color={'#14D9CF'} />
                        </ScrollLink>
                    </div>
                </div>
                <div id='mainContent' className={PageCss.children}>
                    {children}
                </div>
            </div>
        </>
    );
}

export default GenericPage;
