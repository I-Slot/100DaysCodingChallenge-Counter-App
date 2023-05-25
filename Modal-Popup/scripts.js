let modalEl = document.querySelector(".modal")
let btNEl = document.querySelector(".btn")

btNEl.addEventListener("click", (e) => {
    e.preventDefault()
    modalEl.style.display = "inline"
})