const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

dropdownBtn.addEventListener("click", showMenu);

function showMenu() {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
}
