// const query = document.querySelector("#content p");
// console.log(query);

// query.textContent = "wertyui asdfghj wertyu zxcvbn sdf  rty yui"






// QuerySelectorForAll
// const query = document.querySelectorAll("p");
// console.log(query);

// for(let i = 0; i <= query.length-1; i++) {
//     query[i].textContent = "hj rt cv wer g y sd "
// }




// Task 3
const query = document.getElementsByTagName("p");

console.log(query);

for(let i = 0; i <= query.length-1; i++) {
    if(i % 2 === 0) {
        query[i].style.color = "blue";
    }
    else {
        query[i].style.color = "green";
    }
}

query[query.length - 1].style.fontWeight = "bold";