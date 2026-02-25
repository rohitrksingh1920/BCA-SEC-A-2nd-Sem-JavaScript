// console.log("Hello");
// function longRunningTask() {
//     setTimeout(() => {
//         // console.log("Long running task finished.");
//         return "Long running task finished."
//     }, 2000); // this will execute the callback function after 2 seconds
// }// in asynchronus code return statement would not gonna help us, we have to use call back functions 
// console.log(longRunningTask());
// console.log("This will be printed immediately after the long running task is started.");



// console.log("Hello");
// function longRunningTask() {
//     setTimeout((cb) => {
//         // console.log("Long running task finished.");
//         cb("hello world");
//     }, 2000); // this will execute the callback function after 2 seconds
// }// in asynchronus code return statement would not gonna help us, we have to use call back functions


// longRunningTask((data) =>{
//     console.log(data);
// });



// console.log("starting...");
// function myWork(cb) {
//     setTimeout(() => {
//         cb("Doing work...");
//         // return "Doing work...";
//     },5000);
// }

// myWork((data) => {
//     console.log(data);
// });

// console.log("Done.");


// console.log("starting...");
// function login(email, password, cb) {
//     setTimeout(() => {
//         cb({uname : email, isLoggedIn : true, message : "Login successful"});
//     },2000);
// }

// function getVideoList(user, cb) {
//     setTimeout(() => {
//         cb(["video1", "video2", "video3"]);
//     }, 300);
// }
// login("user@example.com", "password123", (data) => {
//     console.log(data);
// });

// getVideoList("exampleUser", (videos)=> {
//     console.log(videos);
// });



// console.log("starting...");
// function login(email, password, cb) {
//     setTimeout(() => {
//         cb({uname : email, isLoggedIn : true, message : "Login successful"});
//     },3000);
// }

// function getVideoList(user, cb) {
//     setTimeout(() => {
//         cb(["video1", "video2", "video3"]);
//     }, 1000);
// }
// login("user@example.com", "password123", (data) => {
//     console.log(data);

//     getVideoList(data.uname, (videos)=> {
//     console.log(videos);
//     });
// });




console.log("Starting...");
function myWork(cb) {
    setTimeout(() => {
        cb("Doing work...");
    }, 5000);
}
myWork((data) => {
    console.log(data);
});
console.log("Done.");



console.log("Starting...");
function login(cb) {
    setTimeout(() => {
        cb({ uname: ElementInternals, isLoggedIn: true, message: "Login successful" });
    }, 3000);
}
function getVideoList(user, cb) {
    setTimeout(() => {
        cb(["video1", "video2", "video3"]);
    }, 1000);
}
function getVideoDetails(video, cb) {
    setTimeout(() => {
        cb({ title: video, duration: "2 mins" });
    }, 1000);
}
login("user@example.com", "password123", (data) => {
    console.log(data);
    getVideoList("exampleUser", (videos) => {
        console.log(videos);
        getVideoDetails(videos[0], (details) => {
            console.log(details);
        });
    });
});


console.log("Done.");