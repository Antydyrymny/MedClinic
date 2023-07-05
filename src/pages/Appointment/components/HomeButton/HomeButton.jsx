import { useNavigate } from 'react-router-dom';
import HomeButtonCss from './HomeButton.module.css';
import homeImg from 'src/assets/Pictogram/home32px.png';

function HomeButton() {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate('/')} className={HomeButtonCss.wrapper}>
            <img src={homeImg} alt='Home' />
        </div>
    );
}

export default HomeButton;
