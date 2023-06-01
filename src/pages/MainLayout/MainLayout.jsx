import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { clinicsFetched } from 'src/data/Clinics';
import { ClinicsContext } from 'src/context/FetchDataContext';
import { clinicsKey } from 'src/data/LocalStorageKeys';
import useLocalStorageState from 'src/hooks/useLocalStorageState';
import LoadingSpinner from 'src/assets/Pictogram/LoadingSpinner';
import NavigationBar from '../NavigationBar/NavigationBar';
import MainLayoutCss from './MainLayout.module.css';

function MainLayout() {
    const [loading, setLoading] = useState(true);
    const [clinics, setClinics] = useLocalStorageState(clinicsKey, null);
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
            <NavigationBar />
            <ClinicsContext.Provider value={clinics}>
                <Outlet />
            </ClinicsContext.Provider>
        </>
    );
}

export default MainLayout;
