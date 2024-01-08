
function fetchData(callback, x,y){
    let sum;
    setTimeout(() => {
        sum = x+y;
        callback(sum);
    }, 1000);
}

fetchData((res)=>{
    console.log(res);
},4,5);