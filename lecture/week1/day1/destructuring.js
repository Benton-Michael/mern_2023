const person = {
    name: 'John',
    age: 100,
    occupation: "coder",
}

// const age = person.age
// console.log(age);

// destructuring an object
let {name, age} = person
console.log(name,age); // Output: John 100

// destructure from an array
let evenNums = [2,4,6,8,10];
let [num1, ,num3] = evenNums
console.log(num1, num3);// 2 6

let names = ['Caden', 'Brendan', 'Michael', 'Bob'];



