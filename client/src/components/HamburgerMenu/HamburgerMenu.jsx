import Hamburger from '../../assets/Pictogram/Hamburger';
import CloseBold from '../../assets/Pictogram/CloseBold';

function HamburgerMenu({ opened, onClick }) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '19px',
                minWidth: '20px',
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            {opened ? <CloseBold /> : <Hamburger />}
        </div>
    );
}

export default HamburgerMenu;
