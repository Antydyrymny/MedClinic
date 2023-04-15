import { Link } from 'react-router-dom';
import NavLine from './NavLine';
import NavCircle from './NavCircle';
import NavBlockCss from './NavBlock.module.css';

function NavBlock({ to, label, color, number }) {
    return (
        <div className={NavBlockCss.wrapper}>
            <Link to={to}>
                <div className={NavBlockCss.link}>
                    <NavCircle color={color} number={number} />
                    <div
                        className={`${NavBlockCss.text} ${
                            color === 'empty' && NavBlockCss.empty
                        }`}
                    >
                        {label}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default NavBlock;
