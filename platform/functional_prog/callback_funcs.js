// Example

// here we have a function called "Outer"
function outer() {
    let count = 0; // this is a count variable that is scoped to the function
    // there is an inner function that increments count and then console logs it
    function inner() {
      count++;
      console.log(count);
    }
    // we're returning the inner function
    return inner;
  }
      
  const counter = outer();   // counter is the function that we returned from calling the outer function
  counter();                 // this will console.log "1"
  counter();                 // this will console.log "2"
  counter();                 // this will console.log "3"
  counter();                 // this will console.log "4"
      
  // so that means that the count variable still exists! 
  // and it is being changed even though we aren't inside of the Outer function!
  // can we access count out here?
  console.log(count); // doesn't work!
  
  