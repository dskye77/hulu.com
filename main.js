window.addEventListener("scroll", function () {
  var btn = document.querySelector(".sign-up-now");
  if (!btn) return;
  if (window.scrollY < 5041 && window.scrollY > 600) {
    btn.classList.remove("hide");
  } else {
    btn.classList.add("hide");
  }
});
window.addEventListener("keydown", function (e) {
  if (e.key === "p") {
    console.log(window.scrollY);
  }
});
const divAddonsToggle = document.getElementById("div_addons_toggle");

function addonsToggle(dir) {
  if (dir === "up") {
    divAddonsToggle.innerHTML = `<button onclick=\"toggleList('addons_content'); toggleList('addons'); addonsToggle('down')\">Hide ADD-ons <img src=\"img/Dropdown_Up_Arrow.svg\" alt=\"\" /></button>`;
  } else {
    divAddonsToggle.innerHTML = `<button onclick=\"toggleList('addons_content'); toggleList('addons'); addonsToggle('up')\">Show ADD-ons <img src=\"img/Dropdown_Down_Arrow.svg\" alt=\"\" /></button>`;
  }
}

function toggleList(id) {
  document.getElementById(id).classList.toggle("active");
}
