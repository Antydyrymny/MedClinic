import { Link } from 'react-router-dom';
import BottomBarCss from './BottomBar.module.css';

function BottomBar({ text = `schedule  an  appointment`, to = '/app/step1' }) {
    return (
        <div className={BottomBarCss.bottomBar}>
            <Link href={to} className={BottomBarCss.link}>
                {text}
            </Link>
        </div>
    );
}

export default BottomBar;
