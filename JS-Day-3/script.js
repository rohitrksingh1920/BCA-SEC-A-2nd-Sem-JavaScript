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

function palindrome() {
    let num = [1, 2, 3, 2, 1];
    let temp = [];
    let original = [];
    for(let i = 0; i <= num.length-1; i++) {
        original.push(num[i]);
    }
    console.log(original);

    while(num.length > 0) {
        temp.push(num.pop());
    }
    console.log(temp);

    for(let i = 0; i <= original.length-1; i++) {
        if(original[i] !== temp[i]) {
            return false;
        }
        else {
            return true;
        }
    }
}
console.log(palindrome());


