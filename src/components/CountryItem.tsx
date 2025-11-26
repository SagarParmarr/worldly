import styles from './CountryItem.module.css';
import type { CountryInterface } from '../interface';
import Emoji from '../Emoji';

interface PropType {
  country: CountryInterface;
}

function CountryItem({ country }: PropType) {
  return (
    <li className={styles.countryItem}>
      <span>
        <Emoji flagEmoji={country.emoji} />
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
