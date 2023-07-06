import { useState, useContext, useEffect } from 'react';
import { ClinicsContext } from 'src/context/FetchDataContext';
import { useLocation } from 'react-router-dom';
import Map from 'src/components/Map/Map';
import ClinicList from './components/ClinicList/ClinicList';
import ClinicImage from './components/ClinicImage/ClinicImage';
import ClinicInfo from './components/ClinicInfo/ClinicInfo';
import DropDown from '../../components/DropDown/DropDown';
import ContactsDropDownCss from './ContactsDropDown.module.css';
import ContactCss from './Contacts.module.css';

function Contacts() {
    const clinics = useContext(ClinicsContext);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const clinicQuery = clinics.find((c) => c.id === +searchParams.get('clinicId'));
    const [chosenClinic, setChosenClinic] = useState(clinicQuery);
    const [center, setCenter] = useState({
        lat: 51.51724180515732,
        lng: -0.09609956165497267,
    });
    const [zoomLevel, setZoomLevel] = useState(12);
    const [isMapFirstRender, setIsMapFirstRender] = useState(true);
    const clinicsDropDown = (
        <>
            {clinics.map((clinic) => (
                <ContactDropDownClinic
                    key={clinic.id}
                    clinic={clinic}
                    onClick={handleClinicChange(clinic)}
                />
            ))}
        </>
    );

    useEffect(() => {
        if (!chosenClinic) setChosenClinic(clinics?.[0]);
    }, [clinics, chosenClinic]);

    return (
        <div className={ContactCss.wrapper}>
            <div className={ContactCss.dropDown}>
                <DropDown
                    customStyle={ContactsDropDownCss}
                    customOptions={clinicsDropDown}
                    customActive={<ContactDropDownClinic clinic={chosenClinic} />}
                />
            </div>
            <div className={ContactCss.screen1000Clinics}>
                <ClinicImage
                    clinic={chosenClinic}
                    active={false}
                    highlighted={true}
                    onClick={chosenClinic ? handleClinicChange(chosenClinic) : null}
                />
            </div>
            <div className={ContactCss.map}>
                <Map
                    locations={clinics}
                    chosen={chosenClinic}
                    setChosen={setChosenClinic}
                    center={center}
                    setCenter={setCenter}
                    zoomLevel={zoomLevel}
                    setZoomLevel={setZoomLevel}
                    isMapFirstRender={isMapFirstRender}
                    setIsMapFirstRender={setIsMapFirstRender}
                />
            </div>
            <div className={ContactCss.clinicList}>
                <ClinicList
                    clinics={clinics}
                    chosenClinic={chosenClinic}
                    onClick={handleClinicChange}
                />
            </div>
            <div className={ContactCss.clinicInfo}>
                <ClinicInfo clinic={chosenClinic} />
            </div>
        </div>
    );

    function handleClinicChange(clinic) {
        return function () {
            setChosenClinic(clinic);
            setCenter(clinic.coordinates);
            setZoomLevel(16);
            setIsMapFirstRender(false);
        };
    }

    function ContactDropDownClinic({ clinic, onClick }) {
        return (
            <div className={ContactsDropDownCss.clinic} onClick={onClick}>
                <div className={ContactsDropDownCss.clinicName}>{clinic?.name}</div>
                <div className={ContactsDropDownCss.clinicAddress}>{clinic?.address}</div>
            </div>
        );
    }
}

export default Contacts;
