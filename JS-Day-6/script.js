// let str = "tu meri me tera me tera tu meri"

// let words = str.split("r")

// console.log(words.length-1);


//first class function
// return only runs once and performs once, and by default it acts like break statement, and once the code hits the return statement it will terminate the loop or move out of the block

// function test(a) {
//     console.log("test")
//     return function test2() {
//         console.log("test2")
//         return function test3(b) {
//             console.log("test3")
//         }
//     }
// }
// test()()()
// let value = test(10)
// let value2 = value()
// value2(20);


// anonyomus function 

// Map(function() {

// })

// self invoking function

// (function() {
//     let a = 10;
//     b = a;
//     console.log(a)
// })()

// console.log(b)


// Detailed Examples
// Regular Function vs. Arrow Function

// let person = {
//     name: "Alice",
//     regularFunction: function() {
//         console.log(this.name);
//     },
//     arrowFunction: () => {
//         console.log(this.name);
//     }
// };

// person.regularFunction();
// person.arrowFunction();

// Regular Function vs. Self-Invoking Function

// Regular Function

// function regularFunction() {
//     console.log("This is a regular function.");
// }

// regularFunction();

// Self-Invoking Function (IIFE)

// (function() {
//     console.log("This is an IIFE.");
// })();