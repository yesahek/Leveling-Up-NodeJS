
function counter() {
    let count = 0;
    return function inc() {
        return ++count;
    };
}

const res = counter();
console.log(res());
console.log(res());
console.log(res());
console.log(res());
