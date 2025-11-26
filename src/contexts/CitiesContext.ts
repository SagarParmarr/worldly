import { createContext, useContext } from 'react';
import type { CityInterface } from '../interface';

interface CityContextType {
  cities: CityInterface[];
  isLoading: boolean;
  currentCity: CityInterface | undefined;
  getCity: CallableFunction;
  firstCityPos?: { lat: number; lng: number };
}
export const initialValues = {
  cities: [],
  isLoading: false,
  currentCity: undefined,
  getCity: () => {},
  firstCityPos: { lat: 0, lng: 0 },
};
export const CitiesContext = createContext<CityContextType>(initialValues);

export const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error('useCity must be used within a CityProvider');
  }
  return context;
};
