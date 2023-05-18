"strict"

// let subtractEl = document.getElementById("subtract")
// let resetEl = document.getElementById("reset")
// let addEl = document.getElementById("add")

let countEl = document.querySelector(".count")

let buttonsEl = document.querySelector(".buttons")

/*
///////////////////////////////
Event Delegation
//////////////////////////////
 */

buttonsEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        countEl.textContent++;
        setBackgroundColor();
    }
    if (e.target.classList.contains("subtract")) {
        countEl.textContent--;
        setBackgroundColor();
    }
    if (e.target.classList.contains("reset")) {
        countEl.textContent = 0;
        setBackgroundColor();
    }

})


function setBackgroundColor() {
    if (countEl.innerHTML > 0) {
      countEl.style.color = "yellow";
    } else if (countEl.innerHTML < 0) {
      countEl.style.color = "orangered";
    } else {
        countEl.style.color = "#fff";
    }
}
    // } else if(e.target.classLists.contain(".subtract")){
    //     subtractEl.innerHTML--
    // } else if(e.target.classLists.contain(".reset")){
    //     resetEl.innerHTML = 0
    // }
// })


/*
/////////////////////////////
Event Listener
////////////////////////////
 */

// subtractEl.addEventListener("click", function () {
//     // console.log(" - clicked")
//     countEl.textContent--
//     color()
// })


// addEl.addEventListener("click", function () {
//     // console.log(" - clicked")
//     countEl.textContent++
//     color()
// })

// resetEl.addEventListener("click", function () {
//     // console.log(" - clicked")
//     countEl.textContent = 0;
//     color()
// })



// function  color() {
//       if (countEl < 0) {
//         countEl = document.body.style.backgroundColor = "red";
//       }
// }

// console.log(color());