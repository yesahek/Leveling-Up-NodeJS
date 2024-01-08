
setTimeout(() => {
    console.log("set timeout");
});

process.nextTick(() => {
    console.log("process next tick");
});

setImmediate(() => {
    console.log("set immediate");
});

console.log("Hello World!");
