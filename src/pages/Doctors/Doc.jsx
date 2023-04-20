import { useContext } from 'react';
import { DoctorsAllContext, SpecialitiesContext } from 'src/context/FetchDataContext';
import useRedirect from 'src/hooks/useRedirect';
import { useParams } from 'react-router-dom';
import DocCss from './Doc.module.css';

function Doc() {
    const [doctors, setDoctors] = useContext(DoctorsAllContext);
    const [specialties, setSpecialties] = useContext(SpecialitiesContext);
    const { name } = useParams();
    const doctor = doctors.find((doc) => doc.name === name.split('-').join(' '));
    useRedirect('/Not-Found', !doctor);
    if (!doctor) return null;
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