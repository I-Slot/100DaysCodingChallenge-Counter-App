let submitEl = document.querySelector(".btn");
let popupEl = document.querySelector(".popup");
let buttonEl = document.querySelector(".ok");


submitEl.addEventListener("click", () => {
    popupEl.style.display = "inline"
})

buttonEl.addEventListener("click", () => {
    popupEl.style.display = "none";
})