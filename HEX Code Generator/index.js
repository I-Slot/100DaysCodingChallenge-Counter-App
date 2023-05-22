"strict"

let buttonEl = document.querySelector(".generate-color");
let colorEl = document.querySelector(".color");

const generateColor = () =>{
    let color = Math.random().toString(16).substring(2, 8);
    color = `#${color}`;
    colorEl.innerHTML = color
    document.body.style.backgroundColor = color
}

// generateColor()


buttonEl.addEventListener("click",generateColor)


// Sub-string Method
// console.log(color);