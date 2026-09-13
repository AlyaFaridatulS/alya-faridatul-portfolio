let currentLanguage = localStorage.getItem("portfolio-language") || "id";

function getLanguageData() { return portfolio.languages[currentLanguage]; }
function getContentData() { return portfolio.content[currentLanguage]; }
function setText(selector, value) { const element = document.querySelector(selector); if (element) element.textContent = value; }
function setHtml(selector, value) { const element = document.querySelector(selector); if (element) element.innerHTML = value; }
function getValue(source, path) { return path.split(".").reduce((value, key) => value?.[key], source); }

function renderPortfolioData() {
  const language = getLanguageData();
  const content = getContentData();
  document.documentElement.lang = currentLanguage;
  document.title = `${portfolio.shared.name} — ${language.role}`;
  document.querySelector('meta[name="description"]').content = language.metaDescription;
  document.querySelectorAll("[data-i18n]").forEach((element) => setText(`[data-i18n="${element.dataset.i18n}"]`, getValue(language, element.dataset.i18n) || getValue(language, element.dataset.i18n.replace(/^/, ""))));
  document.querySelectorAll("[data-i18n-html]").forEach((element) => { element.innerHTML = getValue(language, element.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-attr]").forEach((element) => { const [attribute, key] = element.dataset.i18nAttr.split(":"); element.setAttribute(attribute, getValue(language, key)); });
  setText("[data-about-introduction]", language.about.introduction);
  setText("[data-about-story]", language.about.story);
  setText("[data-email-link] [data-i18n]", language.contact.email);
  const facts = document.querySelector("[data-facts]");
  facts.innerHTML = language.about.facts.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("");
  const skills = document.querySelector("[data-skills]");
  skills.innerHTML = content.skills.map((skill, index) => `<article class="skill-card"><span class="skill-number">${String(index + 1).padStart(2, "0")} / ${skill.group}</span><h3>${skill.name}</h3><p>${skill.context}</p></article>`).join("");
  const education = document.querySelector("[data-education]");
  education.innerHTML = content.education.map((entry) => `<article class="education-entry"><span class="entry-period">${entry.period}</span><h3>${entry.title}</h3><p>${entry.organization}</p><p class="entry-detail">${entry.description}</p></article>`).join("");
  const experience = document.querySelector("[data-experience]");
  experience.innerHTML = content.experience.map((entry) => `<article class="timeline-entry"><span class="timeline-period">${entry.period}</span><span class="timeline-marker" aria-hidden="true"></span><div><h3>${entry.title}</h3><p>${entry.organization}</p><p>${entry.description}</p></div></article>`).join("");
  const organizations = document.querySelector("[data-organizations]");
  organizations.innerHTML = content.organizations.map((entry) => `<article class="organization-entry"><span class="entry-period">${entry.period}</span><h3>${entry.title}</h3><p>${entry.organization}</p><p>${entry.description}</p></article>`).join("");
  const emailLink = document.querySelector("[data-email-link]");

if (emailLink) {
  emailLink.href =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolio.shared.email)}`;
  emailLink.target = "_blank";
  emailLink.rel = "noreferrer";
}
  document.querySelectorAll("[data-social-link]").forEach((link) => { link.href = portfolio.shared.social[link.dataset.socialLink]; });
  document.querySelectorAll("[data-language]").forEach((button) => button.classList.toggle("is-active", button.dataset.language === currentLanguage));
}

function initLanguageSwitcher() {
  document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => {
    currentLanguage = button.dataset.language;
    localStorage.setItem("portfolio-language", currentLanguage);
    renderPortfolioData();
    initProjects();
  }));
}

function initApp() { renderPortfolioData(); initLanguageSwitcher(); initNavigation(); initAnimations(); initProjects(); initInteractions(); }
document.addEventListener("DOMContentLoaded", initApp);
