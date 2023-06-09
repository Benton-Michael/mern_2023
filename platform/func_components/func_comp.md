# Functional v. Class Components

# Using React, we can build components as either classes or functions. Historically, class components have been the way to go. Class components were more robust, and had the ability to handle things such as state. Functional components did not have state directly tied to them, whereas class components had them built in as an attribute to the Component class.

# With the creation of hooks, we can now access component state in a functional component. Class components have slowly been overtaken by functional components, and most new React code will likely use functional components. The React team has stated that they are still going to support class components. You can mix and match them and the code will still work. Going forward, due to the increasing relevance of functional components we will be using them exclusively in the beginning. 

# Since hooks are relatively new, and many existing codebases will still use class components, we cannot overlook them.  As a result, we will learn more about class components later in the stack.

## Examples
<!-- This is a JSX Functional Component -->
import React from 'react';

const FunctionalComponent = () => {
  return (
    <div>
      <h1>Functional Component</h1>
      <p>This is a functional component.</p>
    </div>
  );
};

export default FunctionalComponent;

<!--This is a JSX Class Component  -->
import React from 'react';

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>This is a class component.</p>
      </div>
    );
  }
}

export default ClassComponent;
