import React from 'react';

// A parent component is any component that calls another 
// component from inside their own return statement

const ParentComponent = (props) => {
    return(
        <div>
            <ChildComponent firstName={"Michael"} lastName={"Bananas"} />
        </div>
    )
}
// React will automatically create a Javascript object named "props"
//      using the attributes that we added when we called the ChildComponent
//      in our ParentComponent


const ChildComponent = (props) => {
    return (
        <p>
            Hello, my name is { props.firstName} {props.lastName}
        </p>
    )
}

// a props object will automatically be created by react
// in this example it would look something like this:
// props = {
    //     firstname : 'Michael' , 
    // lastname : 'Banana'
// }