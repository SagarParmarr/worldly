import styles from './CountryList.module.css';
import type { CountryInterface } from '../interface';
import Spinner from './Spinner';
import CountryItem from './CountryItem';
import { useCities } from '../contexts/CitiesContext';
function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  const countries = cities.reduce((arr: CountryInterface[], city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country: CountryInterface) => (
        <CountryItem
          country={country}
          key={country.country}
        />
      ))}
    </ul>
  );
}

export default CountryList;
