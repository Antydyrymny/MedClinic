import { useState, useEffect, useMemo } from 'react';
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
import {
    ClientAppointmentsContext,
    MainBarStateContext,
} from '../../context/MyProfileContext';
import { LoadingContext } from '../../context/LoadingContext';
import { ErrorWhileLoadingContext } from '../../context/ErrorWhileLoadingContext';
import useSessionStorageState from 'src/hooks/useSessionStorageState';
import {
    doctorsKey,
    specialitiesKey,
    clinicsKey,
    myAppsKey,
} from 'src/data/SessionStorageKeys';
import MyNav from './components/MyNav';
import MyMainMenu from './components/MyMainMenu';
import MyContentLayout from './components/MyContentLayout';
import MyProfileCss from './MyProfile.module.css';

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

    const toLoad = useMemo(() => {
        return [
            () => loadClientAppointments({ setClientAppointments, setErrorWhileLoading }),
            () =>
                loadDocClinicSpec({
                    setDoctors,
                    setClinics,
                    setSpecialties,
                    setErrorWhileLoading,
                }),
        ];
    }, [setClientAppointments, setClinics, setDoctors, setSpecialties]);
    const loadCondition =
        location.pathname.startsWith(finalLocation) &&
        (!clientAppointments || !doctors || !clinics || !specialties);
    useLoadData({
        functionsArray: toLoad,
        loadCondition,
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
            <div onClick={() => setClientAppointments(null)}>dsds</div>
            <WindowWidth.Provider value={screenWidth}>
                <MyMainMenu
                    open={menuIsOpen}
                    closeMenu={() => setMenuIsOpen(false)}
                    handleLogout={() => handleLogout()}
                    curActive={curActiveMenuOption}
                    screenWidth={screenWidth}
                />
                <MyNav
                    surname={auth()?.surname}
                    name={auth()?.name}
                    openMenu={() => setMenuIsOpen(true)}
                    screenWidth={screenWidth}
                />
                <ClientAppointmentsContext.Provider
                    value={[clientAppointments, setClientAppointments]}
                >
                    <DoctorsAllContext.Provider value={doctors}>
                        <SpecialitiesContext.Provider value={specialties}>
                            <ClinicsContext.Provider value={clinics}>
                                <MainBarStateContext.Provider value={menuIsOpen}>
                                    <LoadingContext.Provider value={isLoading}>
                                        <ErrorWhileLoadingContext.Provider
                                            value={errorWhileLoading}
                                        >
                                            <MyContentLayout
                                                screenWidth={screenWidth}
                                                mainMenuIsOpen={menuIsOpen}
                                                closeMenu={() => setMenuIsOpen(false)}
                                                aboutToLoad={loadCondition}
                                                isLoading={isLoading}
                                                errorWhileLoading={errorWhileLoading}
                                            >
                                                <Outlet />
                                            </MyContentLayout>
                                        </ErrorWhileLoadingContext.Provider>
                                    </LoadingContext.Provider>
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
