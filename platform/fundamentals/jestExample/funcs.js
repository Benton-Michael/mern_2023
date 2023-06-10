const assert = require('assert');
// to require the native assertion lib in node


// How to test a simple add() function

// funcs.js file resides in the same directory and exports the add function. 

function add(num1, num2) {
    return num1 + num2;
}

assert.strictEqual(add(2, 2), 4);
assert.strictEqual(add(4, 6), 10);

// If the two values passed to the strictEqual function do not match
// the program will exit with an error. 
// To add Jest to your npm project as a dev dependency, run the following: npm i --save-dev jest. 

//
module.exports = add;
