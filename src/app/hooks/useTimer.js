import { useState, useEffect, useRef } from 'react';

const useTimer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerId = useRef(null);

  useEffect(() => {
    if (isTimerRunning) {
      timerId.current = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 0.1);
      }, 100);
    } else if (timerId.current) {
      clearInterval(timerId.current);
    }

    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, [isTimerRunning]);

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const pauseTimer = () => {
    setIsTimerRunning(false);
  };

  const updateTimer = (value) => {
    setCurrentTime(value);
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
    setCurrentTime(0);
  };

  return { currentTime, startTimer, pauseTimer, stopTimer, updateTimer, isTimerRunning };
};

export default useTimer;
