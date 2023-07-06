import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';

function App() {
  // 03 way
  // const alertButton = () => {
  //   alert('You clicked me!')
  // }
  //    Getter   Setter
  // Setter is a function
  const [count, setCount] = useState(10)

  return (
    <>
      <div className='App'>
        {/* <h1>Synthetic Events</h1> */}
        
        {/* <button onClick={alert('You clicked me')}>Click Me 1</button> */}
        {/* Q: Why might it stop alerting after one click? 01 */}
        {/* 03 continued with a pointer to function
        <button onClick={alertButton}>Click Me!</button> */}
        
        {/* So instead it must be an anonymous function. 02 */}
        {/* <button onClick={() => alert('you clicked me!')}>Click me 2</button> */}

        <h2>Using the useState hook</h2>
        <Alert />

        <h3>The current count is: {count}</h3>

      </div>
      
    </>
  )
}

export default App;
