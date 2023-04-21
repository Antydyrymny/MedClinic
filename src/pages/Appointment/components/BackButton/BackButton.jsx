import { useNavigate } from 'react-router-dom';
import BackArrowSvg from 'src/assets/Pictogram/BackArrowSvg';
import BackButtonCss from './BackButton.module.css';

function BackButton({ to }) {
    const navigate = useNavigate();
    return (
        <div className={BackButtonCss.wrapper} onClick={() => navigate(to)}>
            <BackArrowSvg />
        </div>
    );
}

export default BackButton;
