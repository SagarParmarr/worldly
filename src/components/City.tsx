import { useParams } from 'react-router-dom';
import styles from './City.module.css';
import { flagEmojiToString } from '../utils';
import { useEffect } from 'react';
import { useCities } from '../contexts/CitiesContext';
import Spinner from './Spinner';
import BackBtn from './BackBtn';

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const { getCity, currentCity } = useCities();

  useEffect(() => {
    getCity(id);
  }, []);

  if (!currentCity) {
    return <Spinner />;
  }

  const { cityName, emoji, date, notes } = currentCity;

  const countryCode = flagEmojiToString(emoji);
  const imageUrl = `https://flagcdn.com/16x12/${countryCode}.png`;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          {countryCode ? (
            <img
              src={imageUrl}
              alt={`Flag of ${countryCode}`}
              width={20}
              height={15}
            />
          ) : (
            <span>{emoji}</span>
          )}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackBtn />
      </div>
    </div>
  );
}

export default City;
