const heading = document.getElementById('myHeading')
console.log(heading)

heading.style.color = 'tomato';
heading.style.backgroundColor = 'yellow';
console.log(heading.textContent);
heading.textContent = 'byee India!';



const subHeading = document.getElementsByClassName("sub-heading");
console.log(subHeading);
for(let i = 0; i < subHeading.length; i++) {
    subHeading[i].style.color = 'blue';
}


