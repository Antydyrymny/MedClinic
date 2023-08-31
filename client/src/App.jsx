import React, { Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useIsAuthenticated } from 'react-auth-kit';
import useClearSessionStorageOnURLMove from './hooks/useClearSessionStorageOnURLMove ';
import './App.css';
import useTitle from './hooks/useTitle';
import {
    appointmentKey,
    lastProgressStepKey,
    appointmentStep3State,
    myAppsKey,
} from './data/SessionStorageKeys';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import LoadingSpinner from './assets/Pictogram/LoadingSpinner';

const LazyMainLayout = React.lazy(() => import('./pages/MainLayout/MainLayout'));
const LazyHome = React.lazy(() => import('./pages/Home/Home'));
const LazyAppointmentLayout = React.lazy(() =>
    import('./pages/Appointment/AppointmentLayout')
);
const LazyAppStep1 = React.lazy(() => import('./pages/Appointment/AppStep1'));
const LazyAppStep2 = React.lazy(() => import('./pages/Appointment/AppStep2'));
const LazyAppStep3 = React.lazy(() => import('./pages/Appointment/AppStep3'));
const LazyAppStep4 = React.lazy(() => import('./pages/Appointment/AppStep4'));
const LazyDoctorsLayout = React.lazy(() => import('./pages/Doctors/DoctorsLayout'));
const LazyDoctors = React.lazy(() => import('./pages/Doctors/Doctors'));
const LazyDoctorPage = React.lazy(() => import('./pages/Doctors/DoctorPage'));
const LazyServices = React.lazy(() => import('./pages/Services/Services'));
const LazyAbout = React.lazy(() => import('./pages/About/About'));
const LazyContacts = React.lazy(() => import('./pages/Contacts/Contacts'));
const LazyBusiness = React.lazy(() => import('./pages/Business/Business'));
const LazyPartners = React.lazy(() => import('./pages/Partners/Partners'));
const LazyMyProfile = React.lazy(() => import('./pages/MyProfile/MyProfile'));
const LazyMyAppointments = React.lazy(() => import('./pages/MyProfile/MyAppointments'));
const LazyMyDoctors = React.lazy(() => import('./pages/MyProfile/MyDoctors'));
const LazyMySettings = React.lazy(() => import('./pages/MyProfile/MySettings'));
const LazyLogin = React.lazy(() => import('./pages/Login/Login'));
const LazyRegister = React.lazy(() => import('./pages/Login/Register'));
const LazyNotFound = React.lazy(() => import('./pages/NotFound/NotFound'));

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Europe/London');

function App() {
    const location = useLocation();
    useTitle();
    useClearSessionStorageOnURLMove(
        [appointmentKey, lastProgressStepKey, appointmentStep3State],
        '/app'
    );
    useClearSessionStorageOnURLMove([myAppsKey], '/myProfile');

    function PrivateRoute({ Component, redirectRoute = '/login' }) {
        const isAuthenticated = useIsAuthenticated();
        return isAuthenticated() ? (
            <Component />
        ) : (
            <Navigate to={redirectRoute} replace />
        );
    }

    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes location={location}>
                <Route path='/' element={<LazyMainLayout />}>
                    <Route index element={<LazyHome />} />
                    <Route path='/doctors' element={<LazyDoctorsLayout />}>
                        <Route index element={<LazyDoctors />} />
                        <Route path=':name' element={<LazyDoctorPage />} />
                    </Route>
                    <Route path='/services' element={<LazyServices />} />
                    <Route path='/about' element={<LazyAbout />} />
                    <Route path='/contacts' element={<LazyContacts />} />
                    <Route path='/for_business' element={<LazyBusiness />} />
                    <Route path='/partners' element={<LazyPartners />} />
                    <Route path='*' element={<LazyNotFound />} />
                </Route>
                <Route path='/register' element={<LazyRegister />} />
                <Route path='/login' element={<LazyLogin />} />
                <Route
                    path={'/myProfile'}
                    element={<PrivateRoute Component={LazyMyProfile} />}
                />
                <Route
                    path={'/myProfile/:clientName'}
                    element={<PrivateRoute Component={LazyMyProfile} />}
                >
                    <Route index element={<LazyMyAppointments />} />
                    <Route path='myDoctors' element={<LazyMyDoctors />} />
                    <Route path='mySettings' element={<LazyMySettings />} />
                </Route>
                <Route element={<LazyAppointmentLayout />}>
                    <Route path='/app/step1' element={<LazyAppStep1 />} />
                    <Route path='/app/step2' element={<LazyAppStep2 />} />
                    <Route path='/app/step3' element={<LazyAppStep3 />} />
                    <Route path='/app/step4' element={<LazyAppStep4 />} />
                    <Route
                        path={'/app/:clientName/step4'}
                        element={
                            <PrivateRoute
                                Component={LazyAppStep4}
                                redirectRoute={'/app/step4'}
                            />
                        }
                    />
                    <Route path='/app/*' element={<Navigate to='/app/step1' replace />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
