import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { pathNameTable } from '../../data/PathNameTable';
import BreadCrumbsCss from './NavBreadCrumbs.module.css';

function NavBreadCrumbs() {
    const location = useLocation();
    const path = location.pathname.split('/');

    return (
        location.pathname !== '/' && (
            <div className={BreadCrumbsCss.location}>
                {path.map((curPath, ind) => {
                    const linkTo =
                        ind === 0
                            ? '/'
                            : ind === path.length - 1
                            ? null
                            : '/' + path.slice(1, ind + 1).join('/');
                    const pathName =
                        curPath in pathNameTable
                            ? pathNameTable[curPath]
                            : path[ind - 1] === 'doctors'
                            ? // doctor name path
                              curPath.split('-').join(' ')
                            : 'Not Found';

                    return (
                        <div key={ind} className={BreadCrumbsCss.subLocation}>
                            {linkTo ? (
                                <Link to={linkTo} className={BreadCrumbsCss.link}>
                                    {pathName}
                                </Link>
                            ) : (
                                <p>{pathName}</p>
                            )}

                            {ind !== path.length - 1 && (
                                <p className={BreadCrumbsCss.dash}>{` — `}</p>
                            )}
                        </div>
                    );
                })}
            </div>
        )
    );
}

export default NavBreadCrumbs;
