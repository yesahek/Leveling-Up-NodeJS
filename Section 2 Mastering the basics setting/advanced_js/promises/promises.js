
const newPromise= new Promise((res, rej) => {
    //rej("rejected");
    res("resoved");
});

newPromise.then((data)=>{
console.log(data, "from ...");
}).catch((e) => {
console.log(e,"from catch");
});