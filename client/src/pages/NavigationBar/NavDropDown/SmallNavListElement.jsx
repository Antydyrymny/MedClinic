import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowSvg from 'src/assets/Pictogram/BackArrowSvg';
import LongBackArrow from 'src/assets/Pictogram/LongBackArrow';
import CloseBold from 'src/assets/Pictogram/CloseBold';
import LoadingSpinner from '../../../assets/Pictogram/LoadingSpinner';
import ElementCss from './SmallNavListElement.module.css';

function SmallNavListElement({
    title,
    instantLinkTo = null,
    closeDropDown,
    loading,
    children,
}) {
    const [opened, setOpened] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={ElementCss.wrapper}>
            <div
                className={ElementCss.mainBar}
                onClick={() => {
                    if (instantLinkTo) {
                        closeDropDown();
                        navigate(instantLinkTo);
                        return;
                    } else setOpened(true);
                }}
            >
                <div className={ElementCss.title}>{title}</div>
                {children ? (
                    <div className={ElementCss.open}>
                        <BackArrowSvg />
                    </div>
                ) : null}
            </div>
            {(children || loading) && opened ? (
                <div className={ElementCss.popup}>
                    <div className={ElementCss.popupTopBar}>
                        <div className={ElementCss.back} onClick={() => setOpened(false)}>
                            <div className={ElementCss.popupBackIcon}>
                                <LongBackArrow />
                            </div>
                            <div className={ElementCss.popupBackText}>back</div>
                        </div>
                        <div
                            className={ElementCss.popupClose}
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpened(false);
                                closeDropDown();
                            }}
                        >
                            <CloseBold />
                        </div>
                    </div>
                    <div className={ElementCss.childList}>
                        {loading ? (
                            <LoadingSpinner />
                        ) : (
                            children.map((child, index) => (
                                <div
                                    key={index}
                                    className={ElementCss.childBlock}
                                    onClick={() => {
                                        setOpened(false);
                                        closeDropDown();
                                    }}
                                >
                                    <div className={ElementCss.child}>{child}</div>
                                    <div
                                        className={ElementCss.childArrow}
                                        onClick={() => setOpened(false)}
                                    >
                                        <BackArrowSvg />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default SmallNavListElement;
