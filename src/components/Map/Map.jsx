import { useState, useRef } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import LoadingSpinner from 'src/assets/Pictogram/LoadingSpinner';
import MapCss from './Map.module.css';

function Map({ locations, active, setActive }) {
    const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const { isLoaded } = useJsApiLoader({ googleMapsApiKey: key, language: 'en' });
    const [center, setCenter] = useState({
        lat: 51.51724180515732,
        lng: -0.09609956165497267,
    });
    const [zoomLevel, setZoomLevel] = useState(12);
    const mapRef = useRef(null);

    return !isLoaded ? (
        <LoadingSpinner />
    ) : (
        <GoogleMap
            ref={mapRef}
            zoom={zoomLevel}
            onZoomChanged={handleZoomChange}
            center={center}
            mapContainerClassName={MapCss.wrapper}
        >
            {locations.map((location) => (
                <Marker
                    key={location.id}
                    position={location.coordinates}
                    onClick={handleMarkerClick(location)}
                />
            ))}
        </GoogleMap>
    );

    function handleZoomChange() {
        if (mapRef.current) {
            const newZoom = mapRef.current.state.map.zoom;
            setZoomLevel(newZoom);
        }
    }

    function handleMarkerClick(location) {
        return function () {
            setCenter(() => ({
                ...location.coordinates,
            }));
            setZoomLevel(16);
            setActive(location);
        };
    }
}

export default Map;
