import { useRef } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import LoadingSpinner from 'src/assets/Pictogram/LoadingSpinner';
import MapCss from './Map.module.css';

function Map({
    locations,
    chosen,
    setChosen,
    center,
    setCenter,
    zoomLevel,
    setZoomLevel,
    isMapFirstRender,
    setIsMapFirstRender,
}) {
    const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const { isLoaded } = useJsApiLoader({ googleMapsApiKey: key, language: 'en' });
    const mapRef = useRef(null);

    return !isLoaded ? (
        <LoadingSpinner />
    ) : (
        <GoogleMap
            ref={mapRef}
            center={
                isMapFirstRender
                    ? {
                          lat: 51.51724180515732,
                          lng: -0.09609956165497267,
                      }
                    : center
            }
            zoom={isMapFirstRender ? 12 : zoomLevel}
            onDragEnd={handleCenterChange}
            onZoomChanged={handleZoomChange}
            mapContainerClassName={MapCss.wrapper}
            options={{
                styles: [
                    {
                        featureType: 'poi.business',
                        elementType: 'labels',
                        stylers: [{ visibility: 'off' }],
                    },
                ],
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                zoomControl: false,
                scrollwheel: true,
            }}
        >
            {locations.map((location) => (
                <Marker
                    key={location.id}
                    position={location.coordinates}
                    onClick={handleMarkerClick(location)}
                    title={location.name}
                    icon={{
                        url:
                            chosen?.id === location.id
                                ? 'src/assets/Pictogram/mapMarker64px.png'
                                : 'src/assets/Pictogram/mapMarker48px.png',
                    }}
                />
            ))}
        </GoogleMap>
    );

    function handleCenterChange() {
        if (mapRef.current) {
            const newCenterFunc = mapRef.current.state.map.getCenter();
            setCenter({ lat: newCenterFunc.lat(), lng: newCenterFunc.lng() });
        }
        setIsMapFirstRender(false);
    }

    function handleZoomChange() {
        if (mapRef.current) {
            const newZoom = mapRef.current.state.map.zoom;
            setZoomLevel(newZoom);
        }
        setIsMapFirstRender(false);
    }

    function handleMarkerClick(location) {
        return function () {
            setChosen(location);
            setCenter(location.coordinates);
            setZoomLevel(16);
            setIsMapFirstRender(false);
        };
    }
}

export default Map;
