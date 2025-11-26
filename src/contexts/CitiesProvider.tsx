import { useEffect, useState, type ReactElement } from 'react';
import type { CityInterface } from '../interface';
import { CitiesContext, initialValues } from './CitiesContext';

const BASE_URL = 'http://localhost:9000';

interface PropType {
  children: ReactElement;
}
export function CityProvider({ children }: PropType) {
  const [cities, setCities] = useState<CityInterface[]>(initialValues.cities);
  const [isLoading, setIsLoading] = useState(initialValues.isLoading);
  const [currentCity, setCurrentCity] = useState<CityInterface | undefined>(
    initialValues.currentCity
  );
  const [firstCityPos, setFirstCityPos] = useState(initialValues.firstCityPos);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
        setFirstCityPos(data[0].position);
      } catch {
        alert('there was an error loading data...');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id: number) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert('there was an error loading data...');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        firstCityPos,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
