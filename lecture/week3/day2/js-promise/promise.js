let trashGotTakenOut = true

const takeOutTheTrash = new Promise((resolve, reject) => {
    if(trashGotTakenOut){
        resolve('Thanks for taking out the trash!')
    }
    else {
        reject('Y you didn\'t take out the trash man 🙁!')
    }
})

// ! We can write this using a ternary as well:
// ignore blue highlights
// const takeOutTheTrash = new Promise((resolve,reject) => {
//     trashGotTakenOut
//     ? resolve("Thanks for taking out the trash!")
//     : reject('Y you didn\'t take out the trash man 🙁!')
// });





// interacting with the above promise

// method chaining, remember this is not a function, we cannot invoke it
// promises only take in two params
takeOutTheTrash
    .then(message => console.log(message))
    .catch(err => console.log(err))