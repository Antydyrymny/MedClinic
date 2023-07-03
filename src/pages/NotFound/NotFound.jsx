import { Link } from 'react-router-dom';
import NotFoundCss from './NotFound.module.css';

function NotFound() {
    return (
        <div className={NotFoundCss.wrapper}>
            <div
                className={NotFoundCss.content}
                style={{ backgroundImage: 'url(/src/assets/Images/NotFound404.png)' }}
            >
                <h1 className={NotFoundCss.mainHeading}>Error 404</h1>
                <h3 className={NotFoundCss.subHeading}>
                    Oops, something went wrong...
                    <br />
                    We can't find the page
                </h3>
                <div className={NotFoundCss.info}>
                    Please, try to start from the{' '}
                    <Link to={'/'} className={NotFoundCss.link}>
                        home page
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
