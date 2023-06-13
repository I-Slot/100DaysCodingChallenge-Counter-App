let displayMessage = document.getElementById("message");
let buttonEl = document.getElementById("btn");
let counter = 0;

let input = document.getElementById("input")

function removeAfterSetTime() {
    location.reload()
}

buttonEl.addEventListener("click", () => {
 let  Input = document.getElementById("input").value.toLowerCase();
    console.log(input)
    let split = input.split("")
    input.value = ""

    //W e will loop through and look at letter in the word of the input to determine if is a vowel or not
    for (let i = 0; i < split.length; i++){
        if (split[i] == 'a' || split[i] == 'e' || split[i] == 'i' || split[i] == 'o' || split[i] == 'u') {
            counter++
        }
        if (counter > 1) {
            displayMessage.innerHTML = `'${input}' has '${counter}' vowels`
        }
        else {
            displayMessage = `'${input}' has '${counter}' vowel`;
        }
        let timeout = setTimeout(removeAfterSetTime, 2500)
    }
})

//

var x = 5;
var y = 2
var z = x * y + y++

console.log(z);