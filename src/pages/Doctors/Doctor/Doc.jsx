import { useLocation } from 'react-router-dom';
import { specialties } from 'src/data/Specialties';
import DocCss from './Doc.module.css';

function Doc() {
    const location = useLocation();
    const doctor = location.state;
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
