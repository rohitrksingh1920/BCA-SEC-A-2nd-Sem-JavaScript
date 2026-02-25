console.log("a");  //synchronous
setTimeout(()=>{
    console.log("b");
},5000)

setTimeout(()=>{
    console.log("c");
},3000)

setTimeout(()=>{
    console.log("d");
},2000)

console.log("e");  //synchronous