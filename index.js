const open = document.getElementById("open");
const close = document.getElementById("close");
const mainContainer = document.querySelector(".main-container");
const body = document.body;

open.addEventListener("click", () => {
    mainContainer.classList.add("show-nav");
    mainContainer.classList.add("noscroll");
    body.classList.add("noscroll");
});

close.addEventListener("click", () => {
    mainContainer.classList.remove("show-nav");
    mainContainer.classList.remove("noscroll");
    body.classList.remove("noscroll");
});





