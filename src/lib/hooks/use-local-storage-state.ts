import {useState} from "react";

type UseLocalStorageState<TValue> = [TValue, (newValue: TValue) => void];

export function useLocalStorageState<TValue extends unknown>(key: string, defaultValue: TValue): UseLocalStorageState<TValue> {
  const [state, setState] = useState<TValue>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  });

  const setLocalStorageState = (newState: TValue) => {
    try {
      setState(newState);
      window.localStorage.setItem(key, JSON.stringify(newState));
    } catch (error) {
      console.error(error);
    }
  }

  return [state, setLocalStorageState];
}
