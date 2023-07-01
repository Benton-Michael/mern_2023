# Week 2 Session 1 Lecture Notes:
# Synthetic Events and Manipulating data with Hooks (useState)

# Props Review (warm up)
- its an object
- properties
- passed to components
A: 

# JS reminders

**JavaScript Events** actions or occurrences that happen in
a web page.

- They are triggered by the user, the broswer, or the
document itself.

- Events include actions like: clicking a button, scrolling a page,
submitting a form, or loading an image.

- JavaScript code can be used to respond to these events, allowing
you to create interactive web pages. When an event occurs, JS code 
can be executed to respond to that event. 

- For example, you may write code to display an alert message when
the user clicks on a button, or to change the color of a page element
when the mouse pointer is moved over it.

_Italic Text_

[Link Text](https://www.example.com)

```javascript
console.log("Hello");
```

![Alt Text](image.jpg)

**JS Events**
- onClick
- e.preventDefault()
- events cannot be called asynchronously 
(we can only run one event at a time)

- an anonymous function example:
```js
function App() {
    return (
        <button onClick={ () => alert("This button has been clicked") }>Click Me!
        </button>
    );
};

export default App;
```

other examples:
- onChange()
- onSubmit()
- onFocus()
- onBlur()


# What is State in React?

The state is a built-in React object that is used to hold
data or information about the component. A component's state
can change over time. When it changes, the component will
re-render.

**Uses for hooks in React:**
- Generally speaking, a hook is just a function that allows you
to hook-in or use a certain piece of React functionality inside
of your functional components. 

In the context of a React app, hooks are functions that allow you to use React features in functional components. Here are some common use cases for hooks:

1. State Management: The `useState` hook allows you to add state to functional components. It provides a way to store and update state variables within a component.

2. Side Effects: The `useEffect` hook is used to perform side effects in functional components. Side effects can include data fetching, subscriptions, or manually changing the DOM.

3. Context: The `useContext` hook enables you to consume data from React's context API within a functional component. It allows components to access data that is propagated through the component tree without passing props explicitly.

4. Refs: The `useRef` hook provides a way to create mutable variables that persist across re-renders of a component. It can be used for accessing or managing DOM elements, storing previous values, or triggering imperative actions.

5. Custom Hooks: Custom hooks are user-defined hooks that encapsulate reusable logic. They allow you to extract and share common code between components, creating abstractions and enhancing code reuse.

These are just a few examples of the many hooks available in React. Hooks provide a powerful and flexible way to manage state, handle side effects, and access React features in functional components.


**More on useState**

The `useState` hook in React is commonly used for managing state within functional components. Here are some common things that `useState` is used for:

1. Toggling a boolean value: `useState` can be used to toggle a boolean value between `true` and `false`. For example, it can be used to control the visibility of a modal or the expansion of a collapsible section.

2. Storing form input values: `useState` is often used to store and update form input values. As the user enters data into input fields, the state variable managed by `useState` is updated accordingly, allowing you to capture and use the input values.

3. Managing counters and numerical values: `useState` can be used to manage numerical values, such as counters or progress indicators. By updating the state variable associated with the numerical value, you can increment, decrement, or modify it as needed.

4. Handling component visibility: `useState` can control the visibility of components by storing a boolean value indicating whether the component should be displayed or hidden. This can be useful for implementing conditional rendering based on user interactions or application logic.

5. Storing and updating application state: `useState` is commonly used to store and update various aspects of application state. It can be used to manage data retrieved from APIs, control the display of different components or views, and handle various UI-related states like loading indicators or error messages.

These are just a few examples of the many use cases for `useState`. It provides a simple and intuitive way to manage and update state within functional components, allowing you to create dynamic and interactive user interfaces in React.

@ 30:25 / 1:14:57