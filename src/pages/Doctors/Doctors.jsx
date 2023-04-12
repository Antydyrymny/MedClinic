import { Link } from 'react-router-dom';
import DoctorsCss from './Doctors.module.css';

function Doctors() {
    return (
        <>
            <h1>Doctors</h1>
            <Link to={`/doctors/${doctors.doc1}`}>{doctors.doc1}</Link>
            <br />
            <Link to={`/doctors/${doctors.doc2}`}>{doctors.doc2}</Link>
        </>
    );
}

export default Doctors;
