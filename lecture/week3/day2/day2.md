# W3 S2 Notes

toDoList - see W3 S3

## Promises and more practice with APIs

A Promise is a pattern where the eventual response
(and how long it will take to reveive it) is not known

Promises have 3 states:
- Pending (initial state): initial promise that has neither been fulfilled nor rejected.
The outcome is not yet determined.

- Resolved

- Rejected


Example:
```js
const noMondays = new Promise( (resolve, reject) => {
    if(new Date().getDay()!==1);
    resolve("Good - it isn't Monday");
} else {
    reject("someone has a case of the Mondays!")
});
noMondays
    .then( res => console.log(res) )
    .catch( err => console.error(err));
```




Stop/ Start Point
@ 7:01 / 1:06:56