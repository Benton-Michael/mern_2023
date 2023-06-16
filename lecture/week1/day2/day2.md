# Why React

React does client side rendering (as opposed to server side)
and is a component based framework. 

Single Page Application (SPA) we only have one HTML file and
we use JS to write components that will load in that HTML file
and seamlessly change what the user sees and interacts with. 

The virtual DOM (Document Object Model) is a concept used in
web development frameworks like React to optimize the process
of updating UI's efficiently. 

Virtual DOM Representation: virtual DOM is a lightweight copy or
representation of the standard DOM. It is a JavaScript object that 
mirrors the structure of the real DOM, including all of the elements, 
attributes, and their relationships.

Reconciliation: When changes are made to the data or the state of a
component changes, React re-renders the Virtual DOM, creating a new
virtual tree structure.

Diffing: React performs a process called "diffing" by comparing
the new virtual DOM with the previous one. It identifies the diffs
or differences between the two quickly.

Update: Once React identifies the differences, it updates ONLY
the necessary parts of the real DOM to reflect the changes.
This is known as a 'reconciliation' process.

Summary: By using a virtual DOM, React minimizes the number of
direct manipulations to the actual DOM, which can be a costly 
operation. Instead, it focuses on computing and applying the
most efficient set of changes to the real DOM. This approach
leads to better performance and smoother user experience,
especially when dealing with complex and dynamic UIs.

So the virtual DOM acts as a middle layer between the developer 
and the actual DOM. This enables efficient updates and 
rendering of UI components in React apps.
