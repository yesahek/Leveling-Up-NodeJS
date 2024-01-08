// exports.x = 16;
// console.log(module);

// require ('./file');

require = function () {
    console.log('require statement is altered!');
};

require ('./file');