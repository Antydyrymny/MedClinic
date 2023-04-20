import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { DocSearchContext } from 'src/context/DocSearchContext';
import { doctorsFetched } from 'src/data/Doctors';
import { specialtiesFetched } from 'src/data/Specialties';
import { clinicsFetched } from 'src/data/Clinics';
import {
    DoctorsAllContext,
    SpecialitiesContext,
    ClinicsContext,
} from 'src/context/FetchDataContext';
import { doctorsKey, specialitiesKey, clinicsKey } from 'src/data/LocalStorageKeys';
import useLocalStorageState from 'src/hooks/useLocalStorageState';

const doctorFilterSchema = {
    name: '',
    worksWithVhi: false,
    worksWithKids: false,
    clinic: [],
    speciality: [],
};

function DoctorsContext() {
    const [searchParams, setSearchParams] = useState(doctorFilterSchema);
    const [doctors, setDoctors] = useLocalStorageState(doctorsKey, null);
    const [specialties, setSpecialties] = useLocalStorageState(specialitiesKey, null);
    const [clinics, setClinics] = useLocalStorageState(clinicsKey, null);
    // TODO fetch data
    useEffect(() => {
        if (!doctors) setDoctors(doctorsFetched);
        if (!specialties) setSpecialties(specialtiesFetched);
        if (!clinics) setClinics(clinicsFetched);
    });

    return (
        <DocSearchContext.Provider value={[searchParams, setSearchParams]}>
            <DoctorsAllContext.Provider value={[doctors, setDoctors]}>
                <SpecialitiesContext.Provider value={[specialties, setSpecialties]}>
                    <ClinicsContext.Provider value={[clinics, setClinics]}>
                        <Outlet />
                    </ClinicsContext.Provider>
                </SpecialitiesContext.Provider>
            </DoctorsAllContext.Provider>
        </DocSearchContext.Provider>
    );
}

export default DoctorsContext;
