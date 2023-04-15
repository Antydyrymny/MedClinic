import NavCircleCss from './NavCircle.module.css';

function NavCircle({ color, number }) {
    return (
        <div className={`${NavCircleCss.circle} ${NavCircleCss[color]}`}>{number}</div>
    );
}

export default NavCircle;
