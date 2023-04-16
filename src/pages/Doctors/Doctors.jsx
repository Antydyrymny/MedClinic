import { useState, useContext } from 'react';
import { DocSearchContext } from 'src/context/DocSearchContext';
import { Link } from 'react-router-dom';
import { doctors } from 'src/data/Doctors';
import { specialties } from 'src/data/Specialties';
import { clinics } from 'src/data/Clinics';
import SearchBar from 'src/components/SearchBar/SearchBar';
import Button from 'src/components/Button/Button';
import DoctorFilter from './components/DoctorFilter';
import DoctorsCss from './Doctors.module.css';

function Doctors() {
    const [searchParams, setSearchParams] = useContext(DocSearchContext);
    const [specSearch, setSpecSearch] = useState('');
    const docsExpanded = expandDoctors(doctors);
    const docsFiltered = filterDoctors(docsExpanded);

    return (
        <section>
            <h1>Doctors</h1>
            <SearchBar
                value={searchParams.name}
                onChange={handleSearchChange}
                placeholder={'Find a doctor'}
            />
            <DoctorFilter specSearchState={{ specSearch, setSpecSearch }} />
            <ul>
                {docsFiltered.map((doc) => (
                    <div key={doc.id} className={DoctorsCss.doctor}>
                        <Link to={`/doctors/${doc.name.split(' ').join('-')}`}>
                            {doc.name}
                        </Link>
                    </div>
                ))}
            </ul>
            <Button text={'Clear Filter'} onClick={clearFilter} />
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
                // Works in ANY of the clinics
                (clinic.length &&
                    !clinic.reduce((docWorksInClinic, curClinic) => {
                        if (
                            docWorksInClinic ||
                            doc.clinic.map((c) => c.name).includes(curClinic.name)
                        ) {
                            return true;
                        } else return false;
                    }, false)) ||
                // Has ALL the specializations
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

    function clearFilter() {
        setSearchParams({
            name: '',
            worksWithVhi: false,
            worksWithKids: false,
            clinic: [],
            speciality: [],
        });
        setSpecSearch('');
    }
}

export default Doctors;
