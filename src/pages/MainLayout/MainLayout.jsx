import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { clinicsFetched } from 'src/data/Clinics';
import { ClinicsContext } from 'src/context/FetchDataContext';
import { clinicsKey } from 'src/data/SessionStorageKeys';
import useSessionStorageState from 'src/hooks/useSessionStorageState';
import LoadingSpinner from 'src/assets/Pictogram/LoadingSpinner';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import MainLayoutCss from './MainLayout.module.css';

function MainLayout() {
    const [loading, setLoading] = useState(true);
    const [clinics, setClinics] = useSessionStorageState(clinicsKey, null);
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

    return !clinics ? null : loading ? (
        <LoadingSpinner />
    ) : (
        <>
            <ClinicsContext.Provider value={clinics}>
                <NavigationBar />
                <Outlet />
                <Footer />
            </ClinicsContext.Provider>
        </>
    );
}

export default MainLayout;
