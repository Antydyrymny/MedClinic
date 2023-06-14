import { useState, useContext, useMemo } from 'react';
import { DocSearchContext } from 'src/context/DocSearchContext';
import { Link } from 'react-router-dom';
import {
    DoctorsAllContext,
    SpecialitiesContext,
    ClinicsContext,
} from 'src/context/FetchDataContext';
import { LoadingContext } from 'src/context/LoadingContext';
import LoadingSpinner from 'src/assets/Pictogram/LoadingSpinner';
import SearchBar from 'src/components/SearchBar/SearchBar';
import Button from 'src/components/Button/Button';
import DoctorFilter from './components/DoctorFilter';
import { expandDoctors } from 'src/utils/ExpandDoctors';
import { filterDoctors } from 'src/utils/FilterDoctors';
import DoctorsCss from './Doctors.module.css';

function Doctors() {
    const [searchParams, setSearchParams] = useContext(DocSearchContext);
    const loading = useContext(LoadingContext);
    const doctors = useContext(DoctorsAllContext);
    const specialties = useContext(SpecialitiesContext);
    const clinics = useContext(ClinicsContext);
    const [specSearch, setSpecSearch] = useState('');
    const docsExpanded = useMemo(
        () => (loading ? null : expandDoctors(doctors, specialties, clinics)),
        [clinics, doctors, specialties, loading]
    );
    const docsFiltered = useMemo(
        () => (loading ? null : filterDoctors(docsExpanded, searchParams)),
        [docsExpanded, searchParams, loading]
    );

    return (
        <section className={DoctorsCss.wrapper}>
            <h1 className={DoctorsCss.heading}>Doctors</h1>
            <div className={DoctorsCss.searchBar}>
                <SearchBar
                    value={searchParams.name}
                    onChange={handleSearchChange}
                    placeholder={'Find a doctor'}
                />
            </div>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <div className={DoctorsCss.filter}>
                        <DoctorFilter
                            specSearchState={{ specSearch, setSpecSearch }}
                            specialties={specialties}
                            clinics={clinics}
                        />
                    </div>
                    <ul className={DoctorsCss.docGallery}>
                        {docsFiltered.map((doc) => (
                            <div key={doc.id} className={DoctorsCss.doctor}>
                                <Link to={`/doctors/${doc.name.split(' ').join('-')}`}>
                                    {doc.name}
                                </Link>
                            </div>
                        ))}
                    </ul>
                    <div className={DoctorsCss.clearButton}>
                        <Button text={'Clear Filter'} onClick={clearFilter} />
                    </div>
                </>
            )}
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
