// Event Handel
// function handleClick() {
//     document.getElementById("output").textContent = "Button clicked!";     //html collection return karta hai
// }

// function handleClick() {
//     document.querySelector("#head").style.color="red";     //html collection return karta hai

//     document.getElementById("btn").textContent = "color changed"
// }

// Q2

// const handelClick = () => {
//     const image = document.createElement("img");
//     image.setAttribute("src", "https://krmangalam.edu.in/_next/image?url=%2Flife-at-krmu%2Finfra.webp&w=3840&q=75")

//     image.setAttribute("alt", "KR Mangalam");

//     document.getElementById("content").append(image);

// }

const button = document.getElementById("btn");
let link = document.getElementById("link");
let box = document.getElementById("box");
button.addEventListener("click", function () {
  link.style.display = "inline";
  box.style.display = "flex";
});
