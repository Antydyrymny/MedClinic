import { useState, useContext, useEffect } from 'react';
import { ClinicsContext } from 'src/context/FetchDataContext';
import { useLocation } from 'react-router-dom';
import Map from 'src/components/Map/Map';
import ContactCss from './Contacts.module.css';

function Contacts() {
    const clinics = useContext(ClinicsContext);
    const location = useLocation();
    const [chosenClinic, setChosenClinic] = useState(location.state);
    const [center, setCenter] = useState({
        lat: 51.51724180515732,
        lng: -0.09609956165497267,
    });
    const [zoomLevel, setZoomLevel] = useState(12);
    const [isMapFirstRender, setIsMapFirstRender] = useState(true);

    useEffect(() => {
        if (!chosenClinic) setChosenClinic(clinics?.[0]);
    }, [clinics, chosenClinic]);
    return (
        <div className={ContactCss.wrapper}>
            <Map
                locations={clinics}
                chosen={{ ...chosenClinic }}
                setChosen={setChosenClinic}
                center={center}
                setCenter={setCenter}
                zoomLevel={zoomLevel}
                setZoomLevel={setZoomLevel}
                isMapFirstRender={isMapFirstRender}
                setIsMapFirstRender={setIsMapFirstRender}
            />
            <p className={ContactCss.description}>{chosenClinic?.name}</p>
            {clinics
                .sort((a, b) => a.id - b.id)
                .map((clinic) => (
                    <div
                        key={clinic.id}
                        onClick={() => {
                            setChosenClinic(clinic);
                            setCenter(clinic.coordinates);
                            setZoomLevel(16);
                            setIsMapFirstRender(false);
                        }}
                    >
                        {clinic.id}
                    </div>
                ))}
        </div>
    );
}

export default Contacts;
