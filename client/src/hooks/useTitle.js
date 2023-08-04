import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pathNameTable } from '../data/PathNameTable';

export default function useTitle() {
    const location = useLocation();

    useEffect(() => {
        const titleSuffix = ' | FullStack Medicine';
        const path = location.pathname.split('/');
        const curPath = path.at(-1);
        const newTitle =
            curPath in pathNameTable
                ? curPath === ''
                    ? 'FullStack Medicine'
                    : pathNameTable[curPath] + titleSuffix
                : path.includes('doctors')
                ? curPath.split('-').join(' ') + titleSuffix
                : path.includes('app')
                ? pathNameTable.app + titleSuffix
                : path.includes('myProfile')
                ? curPath.myProfile + titleSuffix
                : 'Not Found' + titleSuffix;
        document.title = newTitle;
    }, [location.pathname]);
}
