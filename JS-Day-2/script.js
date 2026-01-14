// let arr = [1, 2, 3, 4, 5]

// let result = arr.map(x => x);
// console.log(result)

// let scores = [12, 7, 22, 15, 32, 6, 4, 27, 11, 16];
// let highScore = scores.filter(score => score => 15);
// console.log(highScore)

// reduce method

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, current) => acc + current);
console.log(sum)
// acc=1, index = 0
// current: rest of the elements apart from index:0
// let sum = 0;

// for(let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum)