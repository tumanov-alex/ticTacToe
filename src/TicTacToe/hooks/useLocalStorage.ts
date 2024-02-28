import { useState } from 'react';
import { TilesData } from '../models.ts';

export function useLocalStorage(key: string, initialValue: TilesData) {
  const [storedValue, setStoredValue] = useState(() => {

    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);

      return initialValue;
    }
  });

  const setValue = (value: TilesData) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
