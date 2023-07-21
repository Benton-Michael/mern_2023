let trashGotTakenOut = true

const takeOutTheTrash = new Promise((resolve, reject) => {
    if(trashGotTakenOut){
        resolve('Thanks for taking out the trash!')
    }
    else {
        reject('Y you didn\'t take out the trash man 🙁!')
    }
})

// interacting with the above promise

takeOutTheTrash
    .then(message => console.log(message))
    .catch(err => console.log(err))