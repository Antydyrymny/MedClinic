import { useIsAuthenticated } from 'react-auth-kit';
import useRedirect from '../../hooks/useRedirect';
import logo48px from '/src/assets/Pictogram/logo48px.png';
import PageWrapperCss from './LoginPageWrapperComponent.module.css';

function LoginPageWrapperComponent({ children }) {
    const isAuthenticated = useIsAuthenticated();
    useRedirect('/myProfile', isAuthenticated());

    return (
        <div className={PageWrapperCss.wrapper}>
            <div className={PageWrapperCss.container}>
                <div className={PageWrapperCss.content}>
                    <div className={PageWrapperCss.logo}>
                        <img src={logo48px} alt={'Fullstack Clinic'} />
                    </div>
                    <h4 className={PageWrapperCss.heading}>Fullstack Clinic</h4>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default LoginPageWrapperComponent;
