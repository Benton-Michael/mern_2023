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





