// Create Variables

const glink = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");

btn.addEventListener("click", generateLink);

function generateLink(e) {
  e.preventDefault();
  const glinkValue = glink.ariaValue;
  const confirmLink = glink.value.includes("https://drive.google.com/file/d/");
  console.log(glinkValue);
}