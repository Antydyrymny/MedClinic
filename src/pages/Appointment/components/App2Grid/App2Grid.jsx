import { useNavigate } from 'react-router-dom';
import DoctorCard from '../DoctorCard/DoctorCard';
import SpecCard from '../SpecCard/SpecCard';
import App2GridCss from './App2Grid.module.css';

function App2Grid({ openedTab, docsFiltered, specsFiltered, docsPerSpec, onClick }) {
    const navigate = useNavigate();

    return (
        <>
            {openedTab === 'Doctor' ? (
                <div className={App2GridCss.docWrapper}>
                    {docsFiltered.map((doc) => (
                        <DoctorCard
                            key={doc.id}
                            onClick={() => {
                                onClick('Doctor', doc.id);
                                navigate('/app/step3');
                            }}
                            name={doc.name}
                            photo={doc.smallPhoto}
                            specialities={doc.speciality}
                            clinics={doc.clinic}
                            price={doc.price}
                        />
                    ))}
                </div>
            ) : openedTab === 'Speciality' ? (
                <div className={App2GridCss.specWrapper}>
                    {specsFiltered.map((spec) => (
                        <SpecCard
                            key={spec.id}
                            specialityName={spec.name}
                            lowestPrice={docsPerSpec
                                .get(spec.name)
                                .reduce(
                                    (lowest, doc) => Math.min(lowest, doc.price),
                                    Infinity
                                )}
                            doctors={docsPerSpec.get(spec.name)}
                            onClick={() => {
                                onClick('Speciality', spec.id);
                                navigate('/app/step3');
                            }}
                        />
                    ))}
                </div>
            ) : null}
        </>
    );
}

export default App2Grid;