import { useState, useEffect, useMemo } from "react";

const useOnScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => setScrollPosition(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        setScrollPosition(window.scrollY);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollPosition > 0;
    // return useMemo(() => scrollPosition > 0, [scrollPosition]);
};

export default useOnScroll;