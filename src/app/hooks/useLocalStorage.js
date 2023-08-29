// Note: useLocalStorage hook
/* eslint-disable no-console */
import { useState, useEffect, useCallback } from "react";
import isSSR from "../utils/isSSR";
import useEventListener from "./useEventListener";

const randomkey = Math.random() * 100;

function useStorage(storageApi, key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue);

  const readValue = useCallback(() => {
    if (isSSR()) {
      return initialValue;
    }
    try {
      const value = window[storageApi].getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      if (process.env.DEPLOY_ENV !== "prod") {
        console.warn(error);
      }
      return initialValue;
    }
  }, [initialValue, key, storageApi]);

  const setValue = (value) => {
    try {
      const newValue = value instanceof Function ? value(storedValue) : value;
      window[storageApi].setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
      window.dispatchEvent(new CustomEvent("storageEvent"));
    } catch (error) {
      if (process.env.DEPLOY_ENV !== "prod") {
        console.warn(error);
      }
    }
  };

  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStorageChange = useCallback(
    (event) => {
      if (event?.key && event.key !== key) {
        return;
      }
      setStoredValue(readValue());
    },
    [key, readValue]
  );

  useEventListener("storage", handleStorageChange);

  useEventListener("storageEvent", handleStorageChange);

  return [storedValue, setValue];
}

export function useSessionStorage(key, initialValue) {
  return useStorage("sessionStorage", key, initialValue);
}

export function useLocalStorage(key, initialValue) {
  return useStorage("localStorage", key, initialValue);
}
