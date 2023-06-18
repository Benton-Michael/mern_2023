See https://react.dev/reference/react-dom/components/common#react-event-object

# Important events
- refreshing a page
- bubbling the event

## To prevent default browser behavior!

- Returning false will not work with any event
we must manually call either event.stopPropagation()
or event.preventDefault()

- Events cannot be called asynchronously because of how
React 'pools' the synthetic events.

## Events we will use most frequently

- onChange - event that runs when a form input is changed
- onClick - event for when something is clicked by user
- onSubmit - event that runs when form is submitted
- onFocus - event that is run when an element is given focus
(clicked on or tabbed to)
- onBlur - even that is run when an element loses focus
(the user moves away from the element)