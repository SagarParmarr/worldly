import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import { useState } from 'react';
import { useCities } from '../contexts/CitiesContext';
import type { CityInterface } from '../interface';
import { useEffect } from 'react';
import useGeolocation from '../hooks/useGeoLocation';
import Button from './Button';

function Map() {
  const [searchParams] = useSearchParams();
  const { cities } = useCities();
  const {
    isLoading,
    position: currLocationPosition,
    getGeolocation,
  } = useGeolocation();

  const mapLat = Number(searchParams.get('lat'));
  const mapLng = Number(searchParams.get('lng'));
  const [mapPosition, setMapPosition] = useState<number[]>([40, 0]);

  const isGeoPositionEqual = () =>
    currLocationPosition?.lat === mapPosition[0] &&
    currLocationPosition?.lng === mapPosition[1];
  useEffect(() => {
    const getCurrCity = () => {
      if (currLocationPosition)
        setMapPosition([currLocationPosition.lat, currLocationPosition.lng]);
    };
    getCurrCity();
  }, [currLocationPosition]);

  useEffect(() => {
    const handleSetMapPosition = () => {
      console.log('mapLat, mapLng useEffect executed');
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    };
    handleSetMapPosition();
  }, [mapLat, mapLng]);

  return (
    <div className={styles.mapContainer}>
      {!isGeoPositionEqual() && (
        <Button
          type="position"
          onClick={() => getGeolocation()}
        >
          {isLoading ? 'Loading...' : 'YOUR LOCATION'}
        </Button>
      )}
      <MapContainer
        center={mapPosition}
        // center={[mapLat, mapLng]}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city: CityInterface) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter
          lat={mapPosition[0]}
          lng={mapPosition[1]}
        />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  map.setView([lat, lng]);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
  return null;
}
export default Map;
