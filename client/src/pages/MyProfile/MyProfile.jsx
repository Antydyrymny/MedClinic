import { useState, createContext, useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { useAuthUser } from 'react-auth-kit';
import useRedirect from '../../hooks/useRedirect';
import useGetScreenWidth from '../../hooks/useGetScreenWidth';
import { WindowWidth } from '../../context/WindowDimensionsContext';
import useGetHandleLogout from '../../hooks/useGetHanleLogout';
import useLoadData from '../../hooks/useLoadData';
import { loadClientAppointments } from '../../utils/loadClientAppointments';
import { loadDocClinicSpec } from '../../utils/loadDocClinicSpec';
import {
    DoctorsAllContext,
    SpecialitiesContext,
    ClinicsContext,
} from 'src/context/FetchDataContext';
import { ClientAppointmentsContext } from '../../context/ClientAppointmentsContext';
import useSessionStorageState from 'src/hooks/useSessionStorageState';
import {
    doctorsKey,
    specialitiesKey,
    clinicsKey,
    myAppsKey,
} from 'src/data/SessionStorageKeys';
import LoadingSpinner from '../../assets/Pictogram/LoadingSpinner';
import MyNav from './components/MyNav';
import MyMainMenu from './components/MyMainMenu';
import MyProfileCss from './MyProfile.module.css';

export const MainBarStateContext = createContext(null);

function MyProfile() {
    // redirect to path with user name
    const location = useLocation();
    const auth = useAuthUser();
    const finalLocation = `/myProfile/${auth()?.name}`;
    useRedirect(finalLocation, !location.pathname.startsWith(finalLocation));

    const handleLogout = useGetHandleLogout();

    const screenWidth = useGetScreenWidth();

    // load data for showing appointments
    const [isLoading, setIsLoading] = useState(false);
    const [errorWhileLoading, setErrorWhileLoading] = useState(null);
    const [clientAppointments, setClientAppointments] = useSessionStorageState(
        myAppsKey,
        null
    );
    const [doctors, setDoctors] = useSessionStorageState(doctorsKey, null);
    const [specialties, setSpecialties] = useSessionStorageState(specialitiesKey, null);
    const [clinics, setClinics] = useSessionStorageState(clinicsKey, null);

    const toLoad = [
        () => loadClientAppointments({ setClientAppointments, setErrorWhileLoading }),
        () =>
            loadDocClinicSpec({
                setDoctors,
                setClinics,
                setSpecialties,
                setErrorWhileLoading,
            }),
    ];
    useLoadData({
        functionsArray: toLoad,
        loadCondition:
            location.pathname.startsWith(finalLocation) &&
            (!clientAppointments || !doctors || !clinics || !specialties),
        setIsLoading,
    });

    const [menuIsOpen, setMenuIsOpen] = useState(true);
    const curActiveMenuOption = location.pathname.endsWith('MyDoctors')
        ? 'MyDoctors'
        : location.pathname.endsWith(finalLocation)
        ? 'MyAppointments'
        : 'MySettings';

    // reset menu on changing screen size
    useEffect(() => {
        setMenuIsOpen(true);
    }, [screenWidth]);

    return (
        <div className={MyProfileCss.wrapper}>
            <WindowWidth.Provider value={screenWidth}>
                <MyMainMenu
                    open={menuIsOpen}
                    closeMenu={() => setMenuIsOpen(false)}
                    handleLogout={() => handleLogout()}
                    curActive={curActiveMenuOption}
                />
                <MyNav
                    surname={auth()?.surname}
                    name={auth()?.name}
                    openMenu={() => setMenuIsOpen(true)}
                />
                <ClientAppointmentsContext.Provider value={clientAppointments}>
                    <DoctorsAllContext.Provider value={doctors}>
                        <SpecialitiesContext.Provider value={specialties}>
                            <ClinicsContext.Provider value={clinics}>
                                <MainBarStateContext.Provider value={menuIsOpen}>
                                    {isLoading ? (
                                        <LoadingSpinner />
                                    ) : errorWhileLoading ? (
                                        <div>{`Error while loading data: ${errorWhileLoading}`}</div>
                                    ) : (
                                        <Outlet />
                                    )}
                                </MainBarStateContext.Provider>
                            </ClinicsContext.Provider>
                        </SpecialitiesContext.Provider>
                    </DoctorsAllContext.Provider>
                </ClientAppointmentsContext.Provider>
            </WindowWidth.Provider>
        </div>
    );
}

export default MyProfile;
