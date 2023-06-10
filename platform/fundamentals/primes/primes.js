/**
 *TODO: 1. Re-write the isPrime() func in order to improve performance
 *TODO: 2. For example, we do not need to search beyond the square root of the number we're checking for even divisibility. 
 */

/*
! Below is the initial version of the function with outputs:
? The 10,000th prime number is 104729
? This took 39415.08676600456 milliseconds to run
*/


// Number.prototype.isPrime = function() {
//     for( let i=2; i<this; i++ ) {
//         if( this % i === 0 ) {
//             return false;
//         }
//     }
//     return true;
// }

/*
* Re-rwitten for speed
* In the modified version, the loop condition i < this has been changed to i <= Math.sqrt(this). This change limits the iteration to check divisibility only up to the square root of the number, which is sufficient to determine primality.

* Additionally, a check has been added at the beginning of the function to handle cases where the number is less than 2. Prime numbers are defined as positive integers greater than 1, so any number less than 2 should immediately return false.
*/

/*

? The 10,000th prime number is 104729
? This took 288.11563193798065 milliseconds to run

*/
Number.prototype.isPrime = function() {
    if(this < 2) {
        return false;
    }

    for(let i = 2; i <= Math.sqrt(this); i++) {
        if (this % i === 0) {
            return false;
        }
    }

    return true;
}





const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
