import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { clinicsFetched } from 'src/data/Clinics';
import { clinicsKey } from 'src/data/LocalStorageKeys';
import useLocalStorageState from 'src/hooks/useLocalStorageState';
import LoadingSpinner from 'src/assets/Pictogram/LoadingSpinner';
import Map from 'src/components/Map/Map';
import ContactCss from './Contacts.module.css';

function Contacts() {
    const [loading, setLoading] = useState(true);
    const [clinics, setClinics] = useLocalStorageState(clinicsKey, null);
    const location = useLocation();
    const [chosenClinic, setChosenClinic] = useState(location.state);
    // TODO fetch data
    useEffect(() => {
        if (!clinics) {
            setClinics(
                clinicsFetched.slice().sort((a, b) => {
                    if (a.name > b.name) return 1;
                    else return -1;
                })
            );
        }
        setLoading(false);
    }, [clinics, setClinics]);
    useEffect(() => {
        if (!chosenClinic) setChosenClinic(clinics?.[0]);
    }, [clinics, chosenClinic]);
    return !clinics || !chosenClinic ? null : loading ? (
        <LoadingSpinner />
    ) : (
        <div className={ContactCss.wrapper}>
            <Map locations={clinics} active={chosenClinic} setActive={setChosenClinic} />
            <p className={ContactCss.description}>{chosenClinic.name}</p>
        </div>
    );
}

export default Contacts;
