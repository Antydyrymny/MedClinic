import { useState } from 'react';
import useLoadDocClinicSpec from '../../hooks/useLoadDocClinicSpec';
import { Outlet } from 'react-router-dom';
import { DocSearchContext } from 'src/context/DocSearchContext';
import {
    DoctorsAllContext,
    SpecialitiesContext,
    ClinicsContext,
} from 'src/context/FetchDataContext';
import { LoadingContext } from 'src/context/LoadingContext';
import { ErrorWhileLoadingContext } from '../../context/ErrorWhileLoadingContext';
import { doctorsKey, specialitiesKey, clinicsKey } from 'src/data/SessionStorageKeys';
import useSessionStorageState from 'src/hooks/useSessionStorageState';

const doctorFilterSchema = {
    name: '',
    worksWithVhi: false,
    worksWithKids: false,
    clinic: [],
    speciality: [],
};

function DoctorsContext() {
    const [searchParams, setSearchParams] = useState(doctorFilterSchema);
    const [loading, setLoading] = useState(true);
    const [errorWhileLoading, setErrorWhileLoading] = useState(null);
    const [doctors, setDoctors] = useSessionStorageState(doctorsKey, null);
    const [specialties, setSpecialties] = useSessionStorageState(specialitiesKey, null);
    const [clinics, setClinics] = useSessionStorageState(clinicsKey, null);

    useLoadDocClinicSpec({
        doctors,
        setDoctors,
        clinics,
        setClinics,
        specialties,
        setSpecialties,
        setLoading,
        setError: setErrorWhileLoading,
    });

    return (
        <DocSearchContext.Provider value={[searchParams, setSearchParams]}>
            <LoadingContext.Provider value={loading}>
                <ErrorWhileLoadingContext.Provider value={errorWhileLoading}>
                    <DoctorsAllContext.Provider value={doctors}>
                        <SpecialitiesContext.Provider value={specialties}>
                            <ClinicsContext.Provider value={clinics}>
                                <Outlet />
                            </ClinicsContext.Provider>
                        </SpecialitiesContext.Provider>
                    </DoctorsAllContext.Provider>
                </ErrorWhileLoadingContext.Provider>
            </LoadingContext.Provider>
        </DocSearchContext.Provider>
    );
}

export default DoctorsContext;
