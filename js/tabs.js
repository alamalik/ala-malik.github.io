// js/tabs.js

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("[data-target]");
  const sections = document.querySelectorAll("[data-section]");

  tabs.forEach(tab => {
    tab.addEventListener("click", e => {
      e.preventDefault(); // prevent jumping to top
      const targetId = tab.getAttribute("data-target");

      // hide all sections
      sections.forEach(section => {
        section.hidden = true;
      });

      // show target section
      const targetSection = document.getElementById(targetId);
      if (targetSection) targetSection.hidden = false;

      // update tab state if it’s a header button
      document.querySelectorAll(".tab").forEach(t => {
        t.removeAttribute("aria-current");
      });
      if (tab.classList.contains("tab")) {
        tab.setAttribute("aria-current", "true");
      }
    });
  });
});
