
function fetchData(x, y) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const sum = x + y;
            if (isNaN(x)|| isNaN(y)) {
                rej("Please enter a valid number");
            }
            res( sum);
        }, 1000);
    });
}

// fetchData(4, 5).then((data) => {
//     console.log(data);
// }).catch((e)=>{
//     console.log(e);
// });

(async()=>{
try {
    const data = await fetchData(7, 3);
    console.log(data);
} catch (error) {
    console.log(error);
}
})();