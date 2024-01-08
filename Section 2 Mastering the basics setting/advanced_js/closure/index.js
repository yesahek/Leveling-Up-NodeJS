

function outerFunction() {
    let outerVar = "I'm from the outer Func";

function innerFunction() {
    console.log(outerVar);
}
innerFunction();
}

outerFunction();

