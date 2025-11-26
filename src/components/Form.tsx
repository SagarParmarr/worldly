// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useState } from 'react';
import type { ChangeEvent } from 'react';

import styles from './Form.module.css';
import Button from './Button';
import BackBtn from './BackBtn';

// const convertToEmoji = (countryCode: string): string => {
//   const codePoints = countryCode
//     .toUpperCase()
//     .split('')
//     .map((char) => 127397 + char.charCodeAt(0));
//   return String.fromCodePoint(...codePoints);
// };

function Form() {
  const [cityName, setCityName] = useState<string>('');
  // const [country, setCountry] = useState('');
  const [date, setDate] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const handleCityNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value);
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleNotesChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(event.target.value);
  };

  const handleSave = () => {
    console.log('Handle Save');
  };

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={handleCityNameChange}
          value={cityName}
        />
        {/* <span className={styles.flag}>{convertToEmoji(emoji)}</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={handleDateChange}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={handleNotesChange}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button
          type="primary"
          onClick={handleSave}
        >
          Add
        </Button>
        <BackBtn />
      </div>
    </form>
  );
}

export default Form;
