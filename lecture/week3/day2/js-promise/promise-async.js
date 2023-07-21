//! Another way to handle the promises from ex-2 with NBA data

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

// We can also do:
// Async func - runs in a different thread
// data is the response 
const makeRequest = async () => {
    try{
        const data = await(getNbaAthletes('NBA'))
        console.log(`Data received`,data);
    }
    catch(err){
        console.log(err);
    }
}

makeRequest()

// Calling makeRequest()
// Data received [
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