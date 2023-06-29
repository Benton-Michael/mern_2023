# OOP v. Functional Programming or procedural programming

# OOP

## Our data and functions are tied together (typically in a class)
- See the User class in oop.js

## functions should 
    - be transparent (every time a func is called the output is the same)

    - Be pure (functions should remain 'pure' and the values of params passed in
    are not allowed to be changed - i.e. make copies of arrays or objects passed in
    rather than working in-place)

    - avoid side-effects: the function shouldn't make API calls, write to file-systems or DB's,
    or print to console. This is a rule we will break. Console.log is great for development
    just not in production code

    - Never be void: ideally functions return a value, if they don't then we've
    likely violated an aforementioned rule about side-effects or mutating an object. Ex. our functional components all return jsx

# RE: React

- React is based on a declarative, functional programming paradigm.
- While it does not strictly adhere to a pure functional programming style,
it makes heavy use of functional concepts and patterns.