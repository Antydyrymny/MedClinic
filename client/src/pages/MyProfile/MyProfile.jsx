import { useState } from 'react';
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
import { doctorsKey, specialitiesKey, clinicsKey } from 'src/data/SessionStorageKeys';
import LoadingSpinner from '../../assets/Pictogram/LoadingSpinner';
import MyNav from './components/MyNav';
import MyMainMenu from './components/MyMainMenu';
import MyProfileCss from './MyProfile.module.css';

function MyProfile() {
    // redirect to path with user name
    const location = useLocation();
    const auth = useAuthUser();
    const finalLocation = `/myProfile/${auth().name}`;
    useRedirect(finalLocation, location.pathname !== finalLocation);

    const handleLogout = useGetHandleLogout();

    const screenWidth = useGetScreenWidth();

    // load data for showing appointments
    const [isLoading, setIsLoading] = useState(true);
    const [errorWhileLoading, setErrorWhileLoading] = useState(null);
    const [clientAppointments, setClientAppointments] = useState(null);
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
            location.pathname === finalLocation &&
            (!clientAppointments || !doctors || !clinics || !specialties),
        setIsLoading,
    });

    const [menuIsOpen, setMenuIsOpen] = useState(true);

    return (
        <div className={MyProfileCss.wrapper}>
            <WindowWidth.Provider value={screenWidth}>
                <MyMainMenu
                    open={menuIsOpen}
                    toogleMenu={setMenuIsOpen}
                    handleLogout={handleLogout}
                />
                <MyNav
                    surname={auth().surname}
                    name={auth().name}
                    toogleMenu={setMenuIsOpen}
                />
                <ClientAppointmentsContext.Provider value={clientAppointments}>
                    <DoctorsAllContext.Provider value={doctors}>
                        <SpecialitiesContext.Provider value={specialties}>
                            <ClinicsContext.Provider value={clinics}>
                                {isLoading ? (
                                    <LoadingSpinner />
                                ) : errorWhileLoading ? (
                                    <div>{`Error while loading data: ${errorWhileLoading}`}</div>
                                ) : (
                                    <Outlet />
                                )}
                            </ClinicsContext.Provider>
                        </SpecialitiesContext.Provider>
                    </DoctorsAllContext.Provider>
                </ClientAppointmentsContext.Provider>
            </WindowWidth.Provider>
            <div onClick={() => handleLogout()}>Leave</div>
        </div>
    );
}

export default MyProfile;
