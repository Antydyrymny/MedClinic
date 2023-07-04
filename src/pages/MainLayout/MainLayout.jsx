import { useState, useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { clinicsFetched } from 'src/data/Clinics';
import { ClinicsContext } from 'src/context/FetchDataContext';
import {
    WindowWidth,
    WindowHeight,
    DocumentScroll,
} from '../../context/WindowDimensionsContext';
import useGetScreenWidth from '../../hooks/useGetScreenWidth';
import useGetScreenHeight from '../../hooks/useGetScreenHeight';
import useGetScroll from '../../hooks/useGetScroll';
import { clinicsKey } from 'src/data/SessionStorageKeys';
import useSessionStorageState from 'src/hooks/useSessionStorageState';
import LoadingSpinner from 'src/assets/Pictogram/LoadingSpinner';
import NavigationBar from '../NavigationBar/NavigationBar';
import BottomBar from '../../components/BottomBar/BottomBar';
import Footer from '../Footer/Footer';

function MainLayout() {
    const [loading, setLoading] = useState(true);
    const [clinics, setClinics] = useSessionStorageState(clinicsKey, null);
    const screenWidth = useGetScreenWidth();
    const screenHeigth = useGetScreenHeight();
    const scroll = useGetScroll();
    const location = useLocation();
    // TODO fetch data
    useEffect(() => {
        if (!clinics) {
            setClinics(
                clinicsFetched.slice().sort((a, b) => {
                    if (a.name < b.name) return 1;
                    else return -1;
                })
            );
        }
        setLoading(false);
    }, [clinics, setClinics]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return !clinics ? null : loading ? (
        <LoadingSpinner />
    ) : (
        <>
            <ClinicsContext.Provider value={clinics}>
                <WindowWidth.Provider value={screenWidth}>
                    <WindowHeight.Provider value={screenHeigth}>
                        <DocumentScroll.Provider value={scroll}>
                            <NavigationBar />
                            <Outlet />
                            {location.pathname !== '/' && <BottomBar />}
                            <Footer />
                        </DocumentScroll.Provider>
                    </WindowHeight.Provider>
                </WindowWidth.Provider>
            </ClinicsContext.Provider>
        </>
    );
}

export default MainLayout;
