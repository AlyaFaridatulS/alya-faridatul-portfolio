function initInteractions() {
  const progress = document.querySelector(".scroll-progress");
  const topButton = document.querySelector(".back-to-top");
  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    topButton.toggleAttribute("hidden", window.scrollY < 500);
  };
  window.addEventListener("scroll", updateScroll, { passive: true });
  updateScroll();
  topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}
