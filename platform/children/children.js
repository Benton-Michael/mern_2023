/*
Notes:

Components can also have children.

Children of components are those elements (or components)
that are within the two JSX element tags.

Here is an example App.jsx that imports a component with children.

*/

import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponent';
    
function App() {
  return (
    <div className="App">
        <MyNewComponent header={ "Header Prop" }>
            <h1>These are children</h1>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
        </MyNewComponent>  
    </div>
  );
}
    
export default App;

/*
We have a Component called MyNewComponent. There is one prop called header 
which we can access within our MyNewComponent.js. We also have some HTML 
elements between the opening and closing MyNewComponent JSX tags. 
All elements between these two tags are called "children". 
We can access them through props via the following:

*/

// This is the file: MyNewComponent.js

import React from 'react';
    
const MyNewComponent = (props) => {
    return(
        <div>
            { props.children }
            <h1>
                { props.header }
            </h1>
        </div>
    );
}
    
export default MyNewComponent;

