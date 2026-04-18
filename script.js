// const timeEl = document.getElementById('time');

// function updateTime() {
//   timeEl.textContent = Date.now();
//   timeEl.setAttribute('datetime', new Date().toISOString());
// }

// updateTime();
// setInterval(updateTime, 500);

const epochEl = document.getElementById("time-display");
function tick() {
  const now = Date.now();
  epochEl.textContent = now;
  epochEl.setAttribute("datetime", new Date(now).toISOString());
}
tick();
setInterval(tick, 500);

document.getElementById("render-stamp").textContent =
  "Rendered · " + new Date().toUTCString();

const bioEl = document.getElementById("bio-text");
const expandBtn = document.getElementById("expand-bio");
const chevron = document.getElementById("expand-chevron");

expandBtn.addEventListener("click", () => {
  const open = expandBtn.getAttribute("aria-expanded") === "true";
  bioEl.classList.toggle("expanded", !open);
  expandBtn.setAttribute("aria-expanded", String(!open));
  // rotate chevron 180° when expanded
  chevron.style.transform = open ? "rotate(0deg)" : "rotate(180deg)";
  // update text node only (keep the SVG)
  expandBtn.childNodes[0].textContent = open
    ? "Read more\n            "
    : "Read less\n            ";
});

document.getElementById("avatar-file").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file || !file.type.startsWith("image/")) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = document.getElementById("avatar-img");
    img.src = ev.target.result;
    img.alt = "Abasi-Ikponke Asuquo — user-uploaded profile photo";
  };
  reader.readAsDataURL(file);
});

document.querySelector(".upload-btn").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    document.getElementById("avatar-file").click();
  }
});
