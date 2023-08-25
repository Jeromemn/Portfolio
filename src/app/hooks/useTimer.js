import { useState, useEffect, useRef } from "react";

const useTimer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isTimerRunning) {
      timerId = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + .1);
      }, 100);
    } else {
      clearInterval(timerId);
    }

    return () => {
      clearInterval(timerId);
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

  return { currentTime, startTimer, pauseTimer, stopTimer,updateTimer,isTimerRunning };
};

export default useTimer;
