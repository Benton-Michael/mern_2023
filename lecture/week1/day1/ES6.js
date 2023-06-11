// ES6 3 main topics


// var let and const (let and const ES6)
// let is similar to var - var and let can change
// 
// scope / scoping - 3 major scopes 
// 1. global scope - contains and is visible in all other scopes (entire file)
// 2. function scope - if a var variable is not global, it's funciton scoped
// nested functions have access to parent functions
// Below is a function scoped var
const sayHello = () => {
    var newName = 'Marcos'
    console.log('Hi', newName);
}
sayHello()
// console.log('Hi', newName) // ReferenceError: newName is not defined
// ! Not defined because it is function scoped. Function Scoped variables or only accessable inside the function
// ! where they have been declared.

// ! Block scope: A block is defined by the curley braces {}
const logNums = (nums) => {
    for (var idx = 0; idx < nums.length; idx++) {
        console.log(`the num is ${nums[idx]} at index ${idx}`);
    } // if the idx was a let it would only be block scoped - and thus wouldn't work
    console.log('final index', idx);
}
logNums([1, 2, 3, 4, 5])

// arrow functions
// () - pass in arguments
// => arrow
//{} the block
let sayHi = () => {
    console.log('Hi');
};
sayHi()

// re-written multiply func in ES6
const multiply = (num1, num2) => {
    return num1 * num2
}

// we can also write this without the return in one-line (return is implicit)
const multiply2 = (num1, num2) => num1 * num2


// good practice to write functions with const




// let and var scope/mutability example
let personOne = 'Ricky'

if (personOne === 'Ricky'){
    let personOne = 'Bob Ross'
    console.log('inside the if statement', personOne)
}
console.log(personOne);