import { useEffect, useRef } from "react";

export function useScrollTransition() {
  const scrollRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScrollEnd = () => {
      scrollRef.current!.classList.add("project-swap");
      setTimeout(() => scrollRef.current!.classList.remove("project-swap"), 30);
    };

    scrollRef.current!.addEventListener("scrollend", handleScrollEnd);
    return () => {
      scrollRef.current!.removeEventListener("scrollend", handleScrollEnd);
    };
  }, []);

  return scrollRef;
}
