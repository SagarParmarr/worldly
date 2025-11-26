import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';
import type { CityInterface } from '../interface';
import Emoji from '../Emoji';
import { useCities } from '../contexts/CitiesContext';
const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

function CityItem({ city }: { city: CityInterface }) {
  const { cityName, emoji, date, id, position } = city;
  const { currentCity } = useCities();

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity?.id ? styles['cityItem--active'] : ''
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>
          <Emoji flagEmoji={emoji} />
        </span>

        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
