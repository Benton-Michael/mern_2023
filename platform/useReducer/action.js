// let action1 = {type: "SET_EMAIL", payload: "Someone@gmail.com"}

// reducer function will use a switch function 
// the reducer will switch on action.type

// this is a simple switch statement outside of a reducer func

const action = {
    type: "SET_EMAIL"
}
switch (action.type) {
    case 'SET_EMAIL':
        // this code block will be reached because
        // action.type === "SET_EMAIL"
        console.log("SET_EMAIL switch code block fired");

    case 'SET_PASSWORD':
        // this code block won't fire, action.type !== "SET_PASSWORD"
        console.log("SET_PASSWORD code block fired");
    
    case 'SET_EMAIL_ERROR':
        // this code block also wont' fire, action.type !== "SET_EMAIL_ERROR"
        console.log('SET_EMAIL_ERROR');

    default:
        // triggered when none of the stated cases are triggered
        console.log("default case fired")
    }