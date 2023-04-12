import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Appointment from './pages/Appointment/Appointment';
import Doctors from './pages/Doctors/Doctors';
import Doc from './pages/Doctors/Doctor/Doc';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';

function App() {
    const env = import.meta.env.VITE_API_URL;
    return (
        <>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/app' element={<Appointment />} />
                <Route path='/doctors' element={<Doctors />} />
                <Route path='/doctors/:name' element={<Doc />} />
                <Route path='/services' element={<Services />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} />
            </Routes>
        </>
    );
}

export default App;
