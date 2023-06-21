A hook, generally speaking, is just a function, either built-in or custom, that allows you to "hook" in or use a certain piece of React functionality inside of your functional components.

Since React functional components are just plain Javascript functions, it's not possible to persist state (data) in local variables as those are initialized every time the function is re-rendered / evaluated. Because of this shortcoming, React provides several hooks to maintain state for our functional components. (State refers to data that is specific to a rendered component and is stored in memory. This data is maintained even after a component has been completely rendered / evaluated)

React provides a few built-in Hooks like useState and useEffect that we will use regularly. You can also create your own Hooks.