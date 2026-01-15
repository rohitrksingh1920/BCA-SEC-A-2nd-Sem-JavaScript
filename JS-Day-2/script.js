// let arr = [1, 2, 3, 4, 5]

// let result = arr.map(x => x);
// console.log(result)

// let scores = [12, 7, 22, 15, 32, 6, 4, 27, 11, 16];
// let highScore = scores.filter(score => score => 15);
// console.log(highScore)

// reduce method

// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((acc, current) => acc + current);
// console.log(sum)
// acc=1, index = 0
// current: rest of the elements apart from index:0
// let sum = 0;

// for(let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum)


// Q 1. Iterate all the element and print the elements

// let arr = [1, 2, 3, 4, 5, 6];

// for( let i = 0; i <= arr.length-1; i++) {
//     console.log(arr[i]);
// }

// Q 2. Add 5 to each number inside the array and take array length 5.

// let arr = [10, 20, 30, 40, 50];

// for(let i = 0; i <= arr.length-1; i++) {
//     console.log(arr[i]+5);
// }
// console.log("array length: ",arr.length);

// Q 3. reverse the array. The elements should be numeric

// let arr = [5, 7, 9, 10, 12];

// for(let i = arr.length-1; i >=0; i--) {
//     console.log(arr[i]);
// }

// Q 4. sort the array in desending order

// let arr = [5, 2, 9, 1, 7];

// for (let i = 0; i <= arr.length-1; i++) {
//     for (let j = i + 1; j <= arr.length-1; j++) {
//         if (arr[i] < arr[j]) {

//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);

// Q 5. Find the duplicate element and return the unique array

let arr = [1, 2, 3, 2, 4, 1, 5, 8, 5];

let unique = [];

for (let i = 0; i <= arr.length-1; i++) {
    let isDuplicate = false;

    for (let j = 0; j <= unique.length-1; j++) {
        if (arr[i] === unique[j]) {
            isDuplicate = true;
            console.log("duplicated:", arr[i]);
            break;
        }
    }

    if (!isDuplicate) {
        unique.push(arr[i]);
    }
}

console.log("Unique Array:", unique);
