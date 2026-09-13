function initNavigation() {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  const menuLinks = menu ? menu.querySelectorAll("a") : [];

  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 18);
  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    menu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.setAttribute("aria-hidden", String(isOpen));
    menu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });
  menuLinks.forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
}
