import { useState } from 'react';

export default function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState<
    { lat: number; lng: number } | undefined
  >();
  const [error, setError] = useState('');

  function getGeolocation() {
    if (!navigator.geolocation)
      return setError('Your browser does not support geolocation');

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }
  return { isLoading, position, error, getGeolocation };
}
