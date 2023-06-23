import { useNavigate } from 'react-router-dom';
import DoctorCard from '../DoctorCard/DoctorCard';
import SpecCard from '../SpecCard/SpecCard';
import App2GridCss from './App2Grid.module.css';

function App2Grid({
    openedTab,
    docsFiltered,
    specsFiltered,
    docsPerSpec,
    onClick,
    appParams,
    setAppParams,
}) {
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
                                setAppParams((p) => ({
                                    ...p,
                                    specialityId: doc.speciality[0].id,
                                }));
                                navigate('/app/step3', {
                                    state: { docsAvailable: [doc] },
                                });
                            }}
                            name={doc.name}
                            photo={doc.smallPhoto}
                            specialities={doc.speciality}
                            clinics={doc.clinic}
                            price={appParams.followUp ? doc.price - 20 : doc.price}
                        />
                    ))}
                </div>
            ) : openedTab === 'Speciality' ? (
                <div className={App2GridCss.specWrapper}>
                    {specsFiltered.map((spec) => {
                        const specMinPrice = docsPerSpec
                            .get(spec.name)
                            .reduce(
                                (lowest, doc) => Math.min(lowest, doc.price),
                                Infinity
                            );
                        return (
                            <SpecCard
                                key={spec.id}
                                specialityName={spec.name}
                                lowestPrice={
                                    appParams.followUp ? specMinPrice - 20 : specMinPrice
                                }
                                doctors={docsPerSpec.get(spec.name)}
                                onClick={() => {
                                    onClick('Speciality', spec.id);
                                    navigate('/app/step3', {
                                        state: {
                                            specName: spec.name,
                                            docsAvailable: docsPerSpec.get(spec.name),
                                            price: appParams.followUp
                                                ? specMinPrice - 20
                                                : specMinPrice,
                                        },
                                    });
                                }}
                            />
                        );
                    })}
                </div>
            ) : null}
        </>
    );
}

export default App2Grid;
