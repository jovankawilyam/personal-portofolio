import { useEffect } from "react";

export function useContactForm() {
  useEffect(() => {
    const form = document.querySelector(".contact-form") as HTMLFormElement;
    const status = document.querySelector(".status-message") as HTMLElement;

    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      status.textContent = "⏳ Sending...";

      fetch(
        "https://script.google.com/macros/s/AKfycbzMIQS_0JMbuJNwBgisval5ZJYa2BSSts6pX9Qa5GEiklz9M28tnSnaIUHrji1BjIN4/exec",
        {
          method: "POST",
          body: new FormData(form),
        }
      )
        .then(() => {
          status.textContent = "✅ Message sent!";
          form.reset();
        })
        .catch(() => {
          status.textContent = "❌ Failed to send.";
        });
    });
  }, []);
}
