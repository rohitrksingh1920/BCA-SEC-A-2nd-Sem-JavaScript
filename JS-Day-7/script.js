// Q 1. Closure + Parameter Change --> 8

// Q 2. Higher-Order Function with Condition --> [20, 40]

// Q 3. IIFE + Closure --> 10

// Q 4. Callback Execution Order --> 
// First
// Second

// Q 5. this Inside Regular Function  --> Amit

// Q 6. this Lost in Callback  --> undefined

// Q 7. Fixing this using Arrow Function --> Neha

// Q 8. Hoisting + Block Scope  --> Error

// Q 9. Function vs Variable Hoisting --> Function Declaration

// Q 10. Closure Inside Loop (let vs var)  --> 
// 1
// 2
// 3

// Q 11. Higher-Order Function Returning Function  --> Hello Suman

// Q 12. IIFE + Global Variable  --> 10

// Q 13. Callback with Async Behavior  --> 
// Task started
// Outside
// Task finished

// Q 14. Array + Higher-Order Method --> 60

// Q 15. Closure Memory Check --> 
// Hello World
// Hello World World

let user = {
    fullname : 'Rohit Singh',
    address :{
        city : 'GGN',
        state : 'Haryana',
},
    mobileno : 123456789,
    favcolor : ['black', 'white', 'blue'],
    demo : function() {
        return 'demo function'
    }
}
// console.log(user.fullname, user.mobileno, user.favcolor[1]);

// console.log("My name is "+user.fullname+". My fav color is "+user.favcolor[0]);

// string literal

// console.log(`My name is ${user.fullname}. My fav color is ${user.favcolor[0]}`);


console.log(user.fullname, user.mobileno, user.favcolor[1], user.address.city, user.demo());  //for API-Object

// Object Methods

// // Object.keys(variable name)
// console.log(log(Object.keys(user)));
// console.log(log(Object.values(user)));
// console.log(log(Object.entries(user)));

const car = {
    make : 'Mahindra',
    model : 'Thar',
};

// Object.freeze(car); //we cant add a new key and value pair and we cant change or update the existing value

Object.seal(car); //we cant add a new key and value pair but we can change and update the existing value

car.model = 'XUV700'
car.color = 'zblack';
console.log(car);