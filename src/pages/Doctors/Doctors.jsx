import { useState, useContext, useMemo } from 'react';
import { DocSearchContext } from 'src/context/DocSearchContext';
import { Link } from 'react-router-dom';
import {
    DoctorsAllContext,
    SpecialitiesContext,
    ClinicsContext,
} from 'src/context/FetchDataContext';
import SearchBar from 'src/components/SearchBar/SearchBar';
import Button from 'src/components/Button/Button';
import DoctorFilter from './components/DoctorFilter';
import { expandDoctors } from 'src/utils/ExpandDoctors';
import { filterDoctors } from 'src/utils/FilterDoctors';
import DoctorsCss from './Doctors.module.css';

function Doctors() {
    const [searchParams, setSearchParams] = useContext(DocSearchContext);
    const [doctors, setDoctors] = useContext(DoctorsAllContext);
    const [specialties, setSpecialties] = useContext(SpecialitiesContext);
    const [clinics, setClinics] = useContext(ClinicsContext);
    const [specSearch, setSpecSearch] = useState('');
    const docsExpanded = useMemo(() => expandDoctors(doctors, specialties, clinics), []);
    const docsFiltered = useMemo(
        () => filterDoctors(docsExpanded, searchParams),
        [docsExpanded, searchParams]
    );

    return (
        <section>
            <h1>Doctors</h1>
            <SearchBar
                value={searchParams.name}
                onChange={handleSearchChange}
                placeholder={'Find a doctor'}
            />
            <DoctorFilter
                specSearchState={{ specSearch, setSpecSearch }}
                specialties={specialties}
                clinics={clinics}
            />
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

    function handleSearchChange(search) {
        setSearchParams({
            ...searchParams,
            clinic: [...searchParams.clinic],
            speciality: [...searchParams.speciality],
            name: search,
        });
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
