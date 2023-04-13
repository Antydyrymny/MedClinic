import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doctors } from 'src/data/Doctors';
import { specialties } from 'src/data/Specialties';
import DocCss from './Doc.module.css';

function Doc() {
    const navigate = useNavigate();
    const { name } = useParams();
    const doctor = doctors.find((doc) => doc.name === name.split('-').join(' '));
    useEffect(() => {
        if (!doctor) {
            navigate('/Not-Found', { replace: true });
        }
    }, [doctor, navigate]);

    if (!doctor) {
        return null;
    }
    const docSpecs = specialties.filter((spec) => doctor.specialtyId.includes(spec.id));
    return (
        <section className='doc'>
            <h1>{doctor.name}</h1>
            <div className='docInfo'>
                <ul>
                    <li>
                        <h2>Specialties</h2>
                        <div>
                            <ul>
                                {docSpecs.map((spec, ind) => {
                                    return (
                                        <li key={ind}>
                                            <div>
                                                <h3>{spec.name}</h3>
                                                <p>{spec.description}</p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </li>
                    <li>
                        <h3>Education</h3>
                        <p>{doctor.education}</p>
                    </li>
                    <li>
                        <h3>Certificates</h3>
                        <p>{doctor.certificates}</p>
                    </li>
                    <li>
                        <h3>Professional interests</h3>
                        <p>{doctor.professionalInterests}</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Doc;
