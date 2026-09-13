function initProjects() {
  const projectList = document.querySelector("[data-projects]");
  const projects = getContentData().projects;
  const empty = projectList.querySelector("[data-empty-projects]");
  const count = document.querySelector("[data-project-count]");
  projectList.querySelectorAll(".project-card").forEach((card) => card.remove());
  count.textContent = `${String(projects.length).padStart(2, "0")} ${getLanguageData().filtersCount}`;
  if (projects.length === 0) return;
  if (empty) empty.remove();
  projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = `project-card${index === 0 ? " featured" : ""}`;
    card.dataset.category = project.category || "other";
    const links = [project.demo ? `<a href="${project.demo}" target="_blank" rel="noreferrer">Demo <span class="arrow">↗</span></a>` : "", project.github ? `<a href="${project.github}" target="_blank" rel="noreferrer">GitHub <span class="arrow">↗</span></a>` : ""].join("");
    card.innerHTML = `<div class="project-image">${project.image ? `<img src="${project.image}" alt="${project.title} project preview" loading="lazy">` : ""}</div><div class="project-body"><span class="project-category">${project.category || getLanguageData().project}</span><h3>${project.title}</h3><p>${project.description}</p><div class="project-meta"><span class="project-tech">${(project.technologies || []).join(" · ")}</span><div class="project-links">${links}</div></div></div>`;
    projectList.appendChild(card);
  });
  document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach((card) => {
      const visible = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-filtered", !visible);
      if (visible) { card.classList.remove("is-visible"); window.requestAnimationFrame(() => card.classList.add("is-visible")); }
    });
  }));
}
