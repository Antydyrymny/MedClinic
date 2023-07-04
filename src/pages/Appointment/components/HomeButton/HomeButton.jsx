import { useNavigate } from 'react-router-dom';
import HomeButtonCss from './HomeButton.module.css';

function HomeButton() {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate('/')} className={HomeButtonCss.wrapper}>
            <img src='/src/assets/Pictogram/home32px.png' alt='Home' />
        </div>
    );
}

export default HomeButton;
