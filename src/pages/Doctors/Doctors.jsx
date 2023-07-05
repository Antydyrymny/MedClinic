import { useState, useContext, useMemo } from 'react';
import { DocSearchContext } from 'src/context/DocSearchContext';
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
import DoctorGalleryItem from './components/DoctorGalleryItem';
import { expandDoctors } from 'src/utils/ExpandDoctors';
import { filterDoctors } from 'src/utils/FilterDoctors';
import ModalFilter from './components/ModalFilter';
import doctorsBackground from 'src/assets/Images/DoctorsBackground.svg';
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
    const allowClearFilter = Object.entries(searchParams).reduce(
        (filteringWasDone, [key, value]) => {
            return filteringWasDone
                ? true
                : key === 'name' || key === 'worksWithVhi' || key === 'worksWithKids'
                ? !!value
                : !!value.length;
        },
        false
    );

    return (
        <div
            className={DoctorsCss.wrapper}
            style={{
                background: `url(${doctorsBackground}) 100% 0/30% no-repeat`,
            }}
        >
            <div className={DoctorsCss.content}>
                <h1 className={DoctorsCss.heading}>Doctors</h1>
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        <div className={DoctorsCss.searchBarBlock}>
                            <div className={DoctorsCss.modalFilter}>
                                <ModalFilter
                                    specSearchState={[specSearch, setSpecSearch]}
                                    specialties={specialties}
                                    clinics={clinics}
                                    clearFilter={clearFilter}
                                    allowClearFilter={allowClearFilter}
                                />
                            </div>
                            <div className={DoctorsCss.searchBar}>
                                <SearchBar
                                    value={searchParams.name}
                                    onChange={handleSearchChange}
                                    placeholder={'Find a doctor'}
                                    styling='Black'
                                    fontSize='1.25'
                                />
                            </div>
                        </div>
                        <div className={DoctorsCss.filterAndGallery}>
                            <div className={DoctorsCss.filterBlock}>
                                <div className={DoctorsCss.filter}>
                                    <DoctorFilter
                                        specSearchState={[specSearch, setSpecSearch]}
                                        specialties={specialties}
                                        clinics={clinics}
                                    />
                                </div>
                                <div className={DoctorsCss.clearButton}>
                                    <Button
                                        text={'Clear Filter'}
                                        onClick={clearFilter}
                                        colored='blue'
                                        customStyles={DoctorsCss}
                                        notAllowed={!allowClearFilter}
                                    />
                                </div>
                            </div>
                            {!docsFiltered.length ? (
                                <div className={DoctorsCss.notFound}>
                                    {'No doctors found'}
                                </div>
                            ) : (
                                <ul className={DoctorsCss.docGallery}>
                                    {docsFiltered.map((doc) => (
                                        <DoctorGalleryItem key={doc.id} doctor={doc} />
                                    ))}
                                </ul>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
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
