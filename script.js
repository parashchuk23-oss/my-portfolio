const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-toggle__icon");
const themeLabel = document.querySelector(".theme-toggle__label");

const savedTheme = localStorage.getItem("portfolio-theme");
const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme ?? (prefersDarkTheme ? "dark" : "light");

function applyTheme(theme) {
  const isDark = theme === "dark";

  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeIcon.textContent = isDark ? "☀️" : "🌙";
  themeLabel.textContent = isDark ? "Світла тема" : "Темна тема";
}

applyTheme(initialTheme);

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";

  applyTheme(nextTheme);
  localStorage.setItem("portfolio-theme", nextTheme);
});
