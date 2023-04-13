import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import Appointment from './pages/Appointment/Appointment';
import DoctorsContext from './pages/Doctors/DoctorsContext';
import Doc from './pages/Doctors/Doctor/Doc';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import NotFound from './pages/NotFound/NotFound';

function App() {
    const env = import.meta.env.VITE_API_URL;

    return (
        <>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/doctors'>
                        <Route index element={<DoctorsContext />} />
                        <Route path=':name' element={<Doc />} />
                    </Route>
                    <Route path='/services' element={<Services />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
                <Route path='/app' element={<Appointment />} />
            </Routes>
        </>
    );
}

export default App;
