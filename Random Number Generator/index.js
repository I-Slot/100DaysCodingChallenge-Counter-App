"strict"

let randomNumberEl = document.querySelector(".random-number")
let generateNumBtn = document.querySelector(".generate-num");

generateNumBtn.addEventListener("click", () => {
    randomNumberEl.textContent = Math.trunc((Math.random()) * 1000 + 1)
})