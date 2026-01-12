import { useEffect } from "react";

export function useFadeIn() {
  useEffect(() => {
    const onScroll = () => {
      document.querySelectorAll(".fade-in").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
  }, []);
}
