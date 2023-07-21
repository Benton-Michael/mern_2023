//* Our function takes in one parameter (request)
//* request will be a string
//* We're returning a new Promise object with the callback function
//* We resolve with the array of objects (not just primitive data types)

function getNbaAthletes (request) {
    return new Promise((resolve, reject) => {
        if (request === 'NBA') {
            resolve([
                {name: 'Kevin Durant', league: 'NBA', position: 'Small Forward', active: true},
                {name: 'Charles Barkley', league: 'NBA', position: 'Power Forward', active: false},
                {name: 'Stephen Curry', league: 'NBA', position: 'Point Guard', active: true},
                {name: 'Shaq', league: 'NBA', position: 'Center', active: false},
                {name: 'Damian Lillard', league: 'NBA', position: 'Point Guard', active: true},
            ])
        } else {
            // creates another object with a message key and a hint
            reject({message: 'Sorry, we cannot understand that request, try again', hint: 'Try NBA as your request' })
        }
    })
}
// data is our array of objects
// When passing NBA we will get the resolve

// When passing a random string we will get the reject, (swap out NBA for abc)

//? Comment one of the below out before running!
// these arrow functions can be written in one line
getNbaAthletes('abc')
    .then(data => console.log(data))
    .catch(err => console.log(err))

// Written for when using with state (for example)
getNbaAthletes('NBA')
    .then((data) => {
        console.log(data)
        setState(data)
    })
    .catch((err) => {
        console.log(err)
        // setSomeMessage with the err message
    })

//! Output with NBA passed to the function:
// [
//     {
//       name: 'Kevin Durant',
//       league: 'NBA',
//       position: 'Small Forward',
//       active: true
//     },
//     {
//       name: 'Charles Barkley',
//       league: 'NBA',
//       position: 'Power Forward',
//       active: false
//     },
//     {
//       name: 'Stephen Curry',
//       league: 'NBA',
//       position: 'Point Guard',
//       active: true
//     },
//     { name: 'Shaq', league: 'NBA', position: 'Center', active: false },
//     {
//       name: 'Damian Lillard',
//       league: 'NBA',
//       position: 'Point Guard',
//       active: true
//     }
//   ]

//! Output with 'abc' passed to the function:
// {
//     message: 'Sorry, we cannot understand that request, try again',
//     hint: 'Try NBA as your request'
// }