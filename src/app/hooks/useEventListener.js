import { useRef, useEffect } from "react";

const useEventListener = (eventName, handler, element) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const el = element || window;
    const eventListener = (event) => savedHandler.current(event);
    if (el && el.addEventListener) {
      el.addEventListener(eventName, eventListener);
    }
    return () => {
      el.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

export default useEventListener;
