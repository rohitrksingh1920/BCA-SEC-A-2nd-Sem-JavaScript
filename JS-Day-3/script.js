// Push
// let fruits = ['orange', 'mango']
// let newLength = fruits.push('apple')

// console.log(newLength);
// console.log(fruits);

// Pop
// let fruits = ['apple','orange', 'mango']
// let removed = fruits.pop()

// console.log(removed);
// console.log(fruits);

// Shift
// let fruits = ['apple','orange', 'mango']
// let removed = fruits.shift()

// console.log(removed);
// console.log(fruits);

// Unshift
// let fruits = ['orange', 'mango']
// let newLength = fruits.unshift('apple')

// console.log(newLength);
// console.log(fruits);


// let arr = [1, 2, 3, 4, 5];

// let res = [];

// while(arr.length > 0) {
//     res.push(arr.pop());
// }
// console.log(res);

// let num = [1, -3, 5, 4, 8, -4, -2];
// let res = []
// for(let i = 0; i <= num.length-1; i++) {
//     if(num[i] > 0) {
//         res.push(num[i]);
//     }
// }
// console.log(res);

// let num = [1,- 3, 5, 4, 8, -4, -2];
// let res = []

// while(num.length < 0) {
//     let val = num.shift();

//     if(val >= 0) {
//         res.push(val);
//     }
// }

// console.log(res);

// function palindrome() {
//     let num = [1, 2, 3, 2, 1];
//     let temp = [];
//     let original = [];
//     for(let i = 0; i <= num.length-1; i++) {
//         original.push(num[i]);
//     }
//     console.log(original);

//     while(num.length > 0) {
//         temp.push(num.pop());f
//     }
//     console.log(temp);

//     for(let i = 0; i <= original.length-1; i++) {
//         if(original[i] !== temp[i]) {
//             return false;
//         }
//         else {
//             return true;
//         }
//     }
// }
// console.log(palindrome());


// Q 1. Reverse the array by using push and pop method.

// let arr = [1, 2, 3, 4, 5]

// let res = []

// while (arr.length > 0) {
//     res.push(arr.pop());
// }
// console.log(res);

// Q 2. Remove all negative numbers from an array

// let arr = [ 1, 3, -5, -2, 8, -1, 8, 0, 3, -9];

// let new_arr = [];

// while(arr.length > 0) {
//     let val = arr.shift();

//     if(val >= 0) {
//         new_arr.push(val);
//     }
// }
// console.log(new_arr);
// Q 3. Check if array is palindrome or not


// function palindrome() {
//     let arr = [1, 2, 3, 2, 1];
//     let temp = [];
//     let original = [];

//     for(let i = 0; i <= arr.length-1; i++) {
//         original.push(arr[i]);
//     }
//     console.log(original);

//     while(arr.length > 0) {
//         temp.push(arr.pop());
//     }

//     for(let i = 0; i <= original.length-1; i++) {
//         if(original[i] === temp[i]) {
//             return "palindrome";
//         }
//         else {
//             return "not a palindrome";
//         }
//     }
// }
// console.log(palindrome());

// Q 4. Split even and odd numbers

// let arr = [1, 3, 4, 6, 9, 8, 10, 19, 22];
// let even = [];
// let odd = []

// for(let i = 0; i <= arr.length-1; i++) {
//     let val = arr[i];

//     if(val % 2 === 0) {
//         even.push(val);
//     }
//     else {
//         odd.push(val);
//     }
// }

// console.log(even);
// console.log(odd);

// Q 5. Move all zeros to the end of the array

// let arr = [1, 4, 2, 0, 3, 8, 7, 0, 5, 2, 4, 0, 8, 9, 7];

// let new_arr = [];

// for(let i = 0; i <= arr.length-1; i++) {
//     let val = arr[i];

//     if(val !== 0) {
//         new_arr.unshift(val);
//     }
//     else {
//         new_arr.push(val);
//     }
// }
// console.log(new_arr);