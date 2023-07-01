import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <div className='App'>
        <h1>Synthetic Events</h1>
        
        <button onClick={alert('You clicked me')}>Click Me 1</button>
        {/* Q: Why might it stop alerting after one click? */}
        
        {/* So instead it must be an anonymous function */}
        <button onClick={() => alert('you clicked me!')}>Click me 2</button>

      </div>
      
    </>
  )
}

export default App;
