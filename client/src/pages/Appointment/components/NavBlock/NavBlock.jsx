import { useNavigate } from 'react-router-dom';
import NavCircle from '../NavCircle/NavCircle';
import NavBlockCss from './NavBlock.module.css';

function NavBlock({ to, label, color, number }) {
    const navigate = useNavigate();
    return (
        <div
            className={`${NavBlockCss.wrapper} ${to ? NavBlockCss.permitted : null}`}
            onClick={() => navigate(to)}
        >
            <NavCircle color={color} number={number} />
            <div
                className={`${NavBlockCss.text} ${
                    color === 'empty' && NavBlockCss.empty
                }`}
            >
                {label}
            </div>
        </div>
    );
}

export default NavBlock;
