// setTimeout(()=>{
//     console.log("Hello");
// }, 1000);

// console.log("This should log first");

let count = 0;

const id = setInterval(()=>{
    count++;
    if (count===3) {
        clearInterval(id);
    }
    console.log("Hello World!");
},1000 );