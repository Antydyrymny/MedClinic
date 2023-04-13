import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';
import MainLayoutCss from './MainLayout.module.css';

function MainLayout() {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    );
}

export default MainLayout;
