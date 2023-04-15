import NavLineCss from './NavLine.module.css';

function NavLine({ color }) {
    return <div className={`${NavLineCss.line} ${NavLineCss[color]}`} />;
}

export default NavLine;
