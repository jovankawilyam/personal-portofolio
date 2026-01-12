import { useEffect } from "react";

export function useNavbar() {
  useEffect(() => {
    const toggle = document.getElementById("mobile-toggle");
    const menu = document.getElementById("nav-menu");

    toggle?.addEventListener("click", () => {
      toggle.classList.toggle("active");
      menu?.classList.toggle("active");
    });

    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 50) navbar?.classList.add("scrolled");
      else navbar?.classList.remove("scrolled");
    });
  }, []);
}
