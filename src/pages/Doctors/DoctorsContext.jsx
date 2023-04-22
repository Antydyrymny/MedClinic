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
import { LoadingContext } from 'src/context/LoadingContext';
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
    const [loading, setLoading] = useState(true);
    const [doctors, setDoctors] = useLocalStorageState(doctorsKey, null);
    const [specialties, setSpecialties] = useLocalStorageState(specialitiesKey, null);
    const [clinics, setClinics] = useLocalStorageState(clinicsKey, null);
    // TODO fetch data
    useEffect(() => {
        if (!doctors)
            setDoctors(
                doctorsFetched.slice().sort((a, b) => {
                    if (a.name > b.name) return 1;
                    else return -1;
                })
            );
        if (!specialties)
            setSpecialties(
                specialtiesFetched.slice().sort((a, b) => {
                    if (a.name > b.name) return 1;
                    else return -1;
                })
            );
        if (!clinics)
            setClinics(
                clinicsFetched.slice().sort((a, b) => {
                    if (a.name > b.name) return 1;
                    else return -1;
                })
            );
        setLoading(false);
    }, [clinics, doctors, setClinics, setDoctors, setSpecialties, specialties]);

    return (
        <DocSearchContext.Provider value={[searchParams, setSearchParams]}>
            <LoadingContext.Provider value={loading}>
                <DoctorsAllContext.Provider value={[doctors, setDoctors]}>
                    <SpecialitiesContext.Provider value={[specialties, setSpecialties]}>
                        <ClinicsContext.Provider value={[clinics, setClinics]}>
                            <Outlet />
                        </ClinicsContext.Provider>
                    </SpecialitiesContext.Provider>
                </DoctorsAllContext.Provider>
            </LoadingContext.Provider>
        </DocSearchContext.Provider>
    );
}

export default DoctorsContext;
