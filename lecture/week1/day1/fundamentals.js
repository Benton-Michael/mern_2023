/**
 ** Data Types (Review) 

Weakly typed! So we don't assign types like in Java or C!

 */

// String
let myName = "Michael";

// Number
let myAge = 90;
let pi = 3.14; // still a number in JS (no floats) decimals are just numbers in JS

// Boolean
let coolDude = true;
let isCool = false;

// Null
let nothing = null;

// Undefined
let something;


// DS Examples

// array - comma separated values
let evenNums = [2,4,6,8,10];

let namesArray = ['Michael', 'Yuki', 'Charles', 'Carlos', 'Alice'];

console.log('Hey!');
console.log(pi);
console.log(evenNums);

// access an array element
console.log(evenNums[1]);

//Objects
// Key : Value
// Anything can be stored in here
let residentRicky = {
    name: 'Ricky',
    occupation: 'Dope', 
    grade12: false,
    age: 51,
    location: 'Sunnyvale',
}
console.log(residentRicky.occupation);
console.log(residentRicky.grade12);
console.log(residentRicky['age']); // I prefer dot notation - both work


// more objects
let employeeMichael = 
{
    name: 'Michael',
    occupation: 'Key Slapper',
    grade12: true,
    favHobbies: ['writing code', 'snorkeling', 'eating'],
    lectureSchedule: {
        week1: {
            day1: 'intro to html/css',
            day2: 'JS in the browser',
            day3: 'git',
        },
        week2: {
            day1: 'terminal cmd',
            day2: 'APIs and JSON',
            day3: 'writing a kernel in 3 mins or less'
        },
    } 
}
console.log(employeeMichael.lectureSchedule.week2.day3) // "writing a kernel in 3 mins or less"

// conditionals and functions
// if, else if, else statement
// see myAge var from above
if (myAge >= 18) {
    console.log('You can partay');
}
else{
    console.log('You can\'t partay');// catch anything else
}
//ex. 1
const grade12Done = true;

if (grade12Done){
    console.log('You did your homework');
}
else{
    console.log('You did not do your homework');
}

// ex. 2
let weekday = 'Friday' // note in this ex. the day IS case-sensitive!

if (weekday == 'Friday'){
    console.log('Weekends comin!');
} else if(weekday == 'Saturday') {
    console.log('One more day to relax!');
} else {
    console.log('I should get back to work!');// if the string is anything else
}

// function syntax

function sayHi(){
    console.log('Hello World!');
}

// This func takes in two params/ inputs
// ES5 way
function multiply(num1, num2){
    return num1*num2
}
let multiplyResult = multiply(3,8); // multiplyResult is the var to catch result of num1*num2
console.log(multiplyResult);




