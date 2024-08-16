document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".accordion-button");

  const manipulateAccordion = (e) => {
    const currentBtn = e.target.closest(".accordion-button");

    if (currentBtn) {
      const isExpanded = currentBtn.getAttribute("aria-expanded") === "true";

      buttons.forEach((button) => {
        button.setAttribute("aria-expanded", "false");
        const btnContent = document.getElementById(
          button.getAttribute("aria-controls")
        );
        if (btnContent) {
          btnContent.hidden = true;
        }
      });

      if (!isExpanded) {
        currentBtn.setAttribute("aria-expanded", "true");
        const btnContent = document.getElementById(
          currentBtn.getAttribute("aria-controls")
        );
        if (btnContent) {
          btnContent.hidden = false;
        }
      }
    }
  };

  document.addEventListener("click", manipulateAccordion);
});
