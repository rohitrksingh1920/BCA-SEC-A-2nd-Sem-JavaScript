const head = document.getElementById("heading");

console.log(head.innerText) //it will show only the visible text

console.log(head.textContent) //it will show all the text including hidden text

console.log(head.innerHTML) //it will show all the text with its tag/element



// DOM Modification
// Create a new element and set its content
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically created paragraph.";
console.log(newParagraph.textContent);


// Append the new element to the container
const container = document.getElementById("container");
container.appendChild(newParagraph);




// Remove the <p> element from the container


// const con = document.getElementById("container");
// const para = con.querySelector("p");
// document.querySelector("#container p").remove();

const elementToRemove = document.querySelector("#container p");
elementToRemove.remove();



// Event Handel
function handleClick() {
    document.getElementById("output").textContent = "Button clicked!";
}