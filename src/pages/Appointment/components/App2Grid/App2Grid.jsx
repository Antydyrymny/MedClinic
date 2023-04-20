import DoctorCard from 'src/components/Card/DoctorCard';
import App2GridCss from './App2Grid.module.css';

function App2Grid({ openedTab, docsFiltered, specsFiltered, docsPerSpec, onClick }) {
    return (
        <div className={App2GridCss.wrapper}>
            {openedTab === 'Doctor'
                ? docsFiltered.map((doc) => (
                      <DoctorCard
                          key={doc.id}
                          //   onClick={() => onClick('Doctor', doc.id)}
                          name={doc.name}
                          photo={doc.smallPhoto}
                          specialities={doc.speciality}
                          clinics={doc.clinic}
                          price={doc.price}
                      />
                  ))
                : openedTab === 'Speciality'
                ? specsFiltered.map((spec) => (
                      <div key={spec.id} onClick={() => onClick('Speciality', spec.id)}>
                          <div>{spec.name}</div>
                          <div>{docsPerSpec.get(spec.name).map((doc) => doc.name)}</div>
                      </div>
                  ))
                : null}
        </div>
    );
}

export default App2Grid;
