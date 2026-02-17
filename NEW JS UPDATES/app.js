// console.log("Hello");
// function longRunningTask() {
//     setTimeout(() => {
//         // console.log("Long running task finished.");
//         return "Long running task finished."
//     }, 2000); // this will execute the callback function after 2 seconds
// }// in asynchronus code return statement would not gonna help us, we have to use call back functions 
// console.log(longRunningTask());
// console.log("This will be printed immediately after the long running task is started.");



console.log("Hello");
function longRunningTask() {
    setTimeout((cb) => {
        // console.log("Long running task finished.");
        cb("hello world");
    }, 2000); // this will execute the callback function after 2 seconds
}// in asynchronus code return statement would not gonna help us, we have to use call back functions


longRunningTask((data) =>{
    console.log(data);
});