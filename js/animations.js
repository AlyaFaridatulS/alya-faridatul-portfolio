function initAnimations() {
  const items = document.querySelectorAll("[data-animate], .reveal");
  if (!("IntersectionObserver" in window)) { items.forEach((item) => item.classList.add("is-visible")); return; }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); currentObserver.unobserve(entry.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
  items.forEach((item) => observer.observe(item));
  window.requestAnimationFrame(() => document.querySelectorAll(".hero .reveal").forEach((item) => item.classList.add("is-visible")));
}
