import { useNavigate } from 'react-router-dom';
import BackArrowSvg from 'src/assets/Pictogram/BackArrowSvg';
import BackButtonCss from './BackButton.module.css';

function BackButton({
    onClick,
    to = null,
    forward = false,
    disabled = false,
    arrowCollor,
    customStyles,
}) {
    const navigate = useNavigate();
    return forward ? (
        <div
            className={`${BackButtonCss.wrapper} ${BackButtonCss.forward} ${
                customStyles ? customStyles.customBackButtonWrapper : null
            } ${disabled ? BackButtonCss.disabled : null} ${
                disabled && customStyles ? customStyles.customButtonDisabled : null
            }`}
            onClick={disabled ? null : () => (to ? navigate(to) : onClick())}
        >
            <button
                style={{ visibility: 'hidden', position: 'absolute', zIndex: '-100' }}
                type='button'
            >
                Forward
            </button>
            <BackArrowSvg color={arrowCollor} />
        </div>
    ) : (
        <div
            className={`${BackButtonCss.wrapper} ${
                customStyles ? customStyles.customBackButtonWrapper : null
            }  ${disabled ? BackButtonCss.disabled : null} ${
                disabled && customStyles ? customStyles.customButtonDisabled : null
            }`}
            onClick={disabled ? null : () => (to ? navigate(to) : onClick())}
        >
            <button
                style={{ visibility: 'hidden', position: 'absolute', zIndex: '-100' }}
                type='button'
            >
                Back
            </button>
            <BackArrowSvg color={arrowCollor} />
        </div>
    );
}

export default BackButton;
