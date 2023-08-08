import { useState, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import useLoadClinics from '../../hooks/useLoadClinics';
import { ClinicsContext } from 'src/context/FetchDataContext';
import { LoadingContext } from '../../context/LoadingContext';
import {
    WindowWidth,
    WindowHeight,
    DocumentScroll,
} from '../../context/WindowDimensionsContext';
import useGetScreenWidth from '../../hooks/useGetScreenWidth';
import useGetScreenHeight from '../../hooks/useGetScreenHeight';
import useGetScroll from '../../hooks/useGetScroll';
import useGetDocumentHeight from '../../hooks/useGetDocumentHeight';
import { clinicsKey } from 'src/data/SessionStorageKeys';
import useSessionStorageState from 'src/hooks/useSessionStorageState';
import LoadingSpinner from 'src/assets/Pictogram/LoadingSpinner';
import NavigationBar from '../NavigationBar/NavigationBar';
import BottomBar from '../../components/BottomBar/BottomBar';
import Footer from '../Footer/Footer';

function MainLayout() {
    const [loading, setLoading] = useState(true);
    const [errorWhileLoading, setErrorWhileLoading] = useState(null);
    const [clinics, setClinics] = useSessionStorageState(clinicsKey, null);
    const screenWidth = useGetScreenWidth();
    const screenHeigth = useGetScreenHeight();
    const scroll = useGetScroll();
    const documentHeight = useGetDocumentHeight();
    const location = useLocation();

    useLoadClinics({ clinics, setClinics, setLoading, setError: setErrorWhileLoading });

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return errorWhileLoading ? (
        <div>{`Error while loading data: ${errorWhileLoading}`}</div>
    ) : (
        <>
            <LoadingContext.Provider value={loading}>
                <ClinicsContext.Provider value={clinics}>
                    <WindowWidth.Provider value={screenWidth}>
                        <WindowHeight.Provider value={screenHeigth}>
                            <DocumentScroll.Provider value={scroll}>
                                <NavigationBar />
                                {loading ? (
                                    <LoadingSpinner />
                                ) : (
                                    <>
                                        <Outlet />
                                    </>
                                )}
                                {location.pathname !== '/' && <BottomBar />}
                                <Footer fixed={documentHeight <= screenHeigth} />
                            </DocumentScroll.Provider>
                        </WindowHeight.Provider>
                    </WindowWidth.Provider>
                </ClinicsContext.Provider>
            </LoadingContext.Provider>
        </>
    );
}

export default MainLayout;
