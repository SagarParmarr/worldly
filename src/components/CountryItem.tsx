import styles from './CountryItem.module.css';
import type { CountryInterface } from '../interface';
import { flagEmojiToString } from '../utils';

interface PropType {
  country: CountryInterface;
}

function CountryItem({ country }: PropType) {
  const countryCode = flagEmojiToString(country.emoji);
  const imageUrl = `https://flagcdn.com/16x12/${flagEmojiToString(
    country.emoji
  )}.png`;

  return (
    <li className={styles.countryItem}>
      <span>
        {countryCode ? (
          <img
            src={imageUrl}
            alt={`Flag of ${countryCode}`}
            width={20}
            height={15}
          />
        ) : (
          <span>{country.emoji}</span>
        )}
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
