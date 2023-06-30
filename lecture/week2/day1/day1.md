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


