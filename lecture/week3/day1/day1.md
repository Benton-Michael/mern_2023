# Lifting state, iterating with map and Intro to APIs

## Lifting State

State is passed down or to sibling components but not between two different components. 

State gets lifted up into a parent component and passed downwards via props.

## Two-way data binding:
In simple terms, imagine you have a text input field on a web page. Two-way data binding allows you to do two things:

Update the UI when the underlying data changes: When you change the value of the data model (e.g., update a variable's value), the UI automatically reflects that change without any additional code. For example, if you update a variable called name to "John," the text input field bound to that variable will display "John" without you having to manually update the UI.

Update the data model when the UI changes: Similarly, when you enter or modify a value in the text input field, the underlying data model is automatically updated to reflect that change. For instance, if you type "Jane" in the text input field, the associated variable name will be updated to "Jane" behind the scenes.

The idea behind two-way data binding is to keep the UI and the data in sync with each other, eliminating the need for explicit event handling or manual updates.

Two-way data binding is commonly used in frameworks and libraries like Angular, Vue.js, and React. These frameworks provide tools and mechanisms to establish the two-way data binding relationship between the UI and data model, making it easier to build dynamic and interactive applications.

Overall, two-way data binding simplifies the process of keeping the UI and data consistent, reducing the amount of code needed to handle data updates and allowing for a more reactive and responsive user experience.


# Questions

Q: Why aren't we using the .push() method to add to the array?
A: Our array exists within the function setShow
    we use the spread operator to make a copy of original show list
    and then adding the new show to the end of it (this is React specific)
    .push() can only be used directly on arrays.


## Next we want to iterate through the showList

- add the new component DisplayShows

# API intro

Application Programming Interface
    - the way two programs communicate with one another


Def: APIs are mechanisms that enable two software components to
communicate with each other using a set of definitions and protocols

Common App:
- Weather app (using a weather API) in coordination with tracking/ gps


# useEffect()

The useEffect() Hook allows you to perform side effects in your components.
Some examples of side-effects are: fetching data, directly updating the DOM,
and setting timers. The useEffect Hook can take in an optional second argument...
However - it is considered mandatory in our course.

useEffect
An anonymous callback function

Part 1: (argument 1)
```js
useEffect(() => {
    // code here will run when this effect runs for first time AND after every update
    // and with the empty array it will run every time the component renders.
    fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(response => setPeople(response.results))
}, []);
// All of this is part 1/ argument 1 except for the portion after ,
// aka the empty array []);
```
In Part 2 / Argument 2 ... We'll define what happens inside the callback function