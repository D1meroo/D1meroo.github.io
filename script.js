// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle: black & silver (dark) by default, light mode on click (remembered)
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

try {
  if (localStorage.getItem("theme") === "light") root.dataset.theme = "light";
} catch (e) {}

toggle.addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});
