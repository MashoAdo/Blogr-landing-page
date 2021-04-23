const arrow = document.querySelectorAll(".arrow");
const header = document.querySelectorAll("#nav-header");
const list = document.querySelectorAll(".dropdown-content");



header.forEach(head => {
    head.addEventListener("click", myFunction);
});