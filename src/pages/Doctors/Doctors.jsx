import { useContext } from 'react';
import { DocSearchContext } from 'src/context/DocSearchContext';
import { Link } from 'react-router-dom';
import { doctors } from 'src/data/Doctors';
import { specialties } from 'src/data/Specialties';
import { clinics } from 'src/data/Clinics';
import SearchBar from 'src/components/SearchBar/SearchBar';
import DoctorFilter from './components/DoctorFilter';
import DoctorsCss from './Doctors.module.css';

function Doctors() {
    const [searchParams, setSearchParams] = useContext(DocSearchContext);
    const docsExpanded = expandDoctors(doctors);
    const docsFiltered = filterDoctors(docsExpanded);

    return (
        <section>
            <h1>Doctors</h1>
            <SearchBar onChange={handleSearchChange} placeholder={'Find a doctor'} />
            <DoctorFilter />
            <ul>
                {docsFiltered.map((doc) => (
                    <div key={doc.id} className={DoctorsCss.doctor}>
                        <Link
                            to={`/doctors/${doc.name.split(' ').join('-')}`}
                            state={doc}
                        >
                            {doc.name}
                        </Link>
                    </div>
                ))}
            </ul>
        </section>
    );

    function expandDoctors(doctors) {
        return doctors.map((doc) => {
            const speciality = specialties.filter((spec) =>
                doc.specialtyId.includes(spec.id)
            );
            const clinic = clinics.filter((clinic) => doc.clinicId.includes(clinic.id));
            return { ...doc, speciality, clinic };
        });
    }

    function filterDoctors(doctorsExpanded) {
        return doctorsExpanded.filter((doc) => {
            const { name, worksWithVhi, worksWithKids, clinic, speciality } =
                searchParams;
            if (
                (name && !doc.name.toLowerCase().includes(name.toLowerCase())) ||
                (worksWithVhi && !doc.worksWithVhi) ||
                (worksWithKids && !doc.worksWithKids) ||
                (clinic.length && !doc.clinic.map((cl) => cl.address).includes(clinic)) ||
                (speciality.length &&
                    speciality.reduce((docLacksSpec, curSpec) => {
                        if (
                            docLacksSpec ||
                            !doc.speciality.map((s) => s.name).includes(curSpec.name)
                        ) {
                            return true;
                        } else return false;
                    }, false))
            ) {
                return false;
            } else return true;
        });
    }

    function handleSearchChange(search) {
        setSearchParams({ ...searchParams, name: search });
    }
}

export default Doctors;
