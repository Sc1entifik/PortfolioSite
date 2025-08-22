import { useEffect, useRef } from "react";

export function useScrollTransition() {
  const scrollRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current!.classList.add("project-swap");
      setTimeout(() => scrollRef.current!.classList.remove("project-swap"), 170);
    };

    scrollRef.current!.addEventListener("scrollend", handleScroll);
    return () => {
      scrollRef.current!.removeEventListener("scrollend", handleScroll);
    };
  }, []);

  return scrollRef;
}
