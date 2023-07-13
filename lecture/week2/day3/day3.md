# Lecture - Week 2 Session 3

## Ternary Operators & Higher order & Callback Functions (map(), filter())


```js
// ternary operator example: condition? true_value : false_value;




```
## See conditional rendering section for Ternary operators
see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

```js
function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true));
// Expected output: "$2.00"

console.log(getFee(false));
// Expected output: "$10.00"

console.log(getFee(null));
// Expected output: "$10.00"
```

```js
{/* rest of component removed for brevity */}
    
{/* this functionality can be repeated for each form input */}
<form onSubmit={ createUser }>
    {
        hasBeenSubmitted ? 
        <h3>Thank you for submitting the form!</h3> :
        <h3>Welcome, please submit the form.</h3> 
    }
    <div>
        <label>Username: </label> 
        <input type="text" onChange={ (e) => setUsername(e.target.value) } />
    </div>
    {/* Email and Password inputs removed for brevity */}
</form>
    
{/* rest of component removed for brevity */}
```

