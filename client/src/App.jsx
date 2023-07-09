import { Routes, Route, Navigate } from 'react-router-dom';
import useClearSessionStorageOnURLMove from './hooks/useClearSessionStorageOnURLMove ';
import './App.css';
import MainLayout from './pages/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import AppointmentLayout from './pages/Appointment/AppointmentLayout';
import {
    appointmentKey,
    lastProgressStepKey,
    appointmentStep3State,
} from './data/SessionStorageKeys';
import AppStep1 from './pages/Appointment/AppStep1';
import AppStep2 from './pages/Appointment/AppStep2';
import AppStep3 from './pages/Appointment/AppStep3';
import AppStep4 from './pages/Appointment/AppStep4';
import DoctorsContext from './pages/Doctors/DoctorsContext';
import Doctors from './pages/Doctors/Doctors';
import DoctorPage from './pages/Doctors/DoctorPage';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Business from './pages/Business/Business';
import Partners from './pages/Partners/Partners';
import NotFound from './pages/NotFound/NotFound';

function App() {
    useClearSessionStorageOnURLMove(
        [appointmentKey, lastProgressStepKey, appointmentStep3State],
        '/app'
    );

    return (
        <>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/doctors' element={<DoctorsContext />}>
                        <Route index element={<Doctors />} />
                        <Route path=':name' element={<DoctorPage />} />
                    </Route>
                    <Route path='/services' element={<Services />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/for_business' element={<Business />} />
                    <Route path='/partners' element={<Partners />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
                <Route element={<AppointmentLayout />}>
                    <Route path='/app/step1' element={<AppStep1 />} />
                    <Route path='/app/step2' element={<AppStep2 />} />
                    <Route path='/app/step3' element={<AppStep3 />} />
                    <Route path='/app/step4' element={<AppStep4 />} />
                    <Route path='/app/*' element={<Navigate to='/app/step1' replace />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;