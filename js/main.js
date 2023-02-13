const button = document.querySelector(".navbar__ham");
const menu = document.querySelector(".navbar__links");
const overlay = document.querySelector("#overlay");

button.addEventListener("click", () => {
  button.classList.toggle("open");
  menu.classList.toggle("navbar__open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  overlay.classList.toggle("show");
  button.classList.toggle("open");
  menu.classList.toggle("navbar__open");
});
const count = document.getElementById('website-counter');
updateVisitCount();

function updateVisitCount() {
  fetch("https://api.countapi.xyz/hit/usam/key")
  .then(res => res.json())
  .then(res => {
    count.innerHTML = res.value;
  });
}