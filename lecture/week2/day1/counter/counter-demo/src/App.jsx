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
  const increaseCount = () => {
    setCount(count+1)
  }
  const [title, setTitle] = useState('Title')

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
        
        <button onClick={()=> setTitle('A New Title')}>Change the title</button>

        <h2>Using the useState hook</h2>
        <Alert />
        <h2>The title is: {title}</h2>
        <h3>The current count is: {count}</h3>
        {/* Remember: React batches state updates */}
        {/* console.log would potentially be off */}
        <button onClick={increaseCount}>Increase Count</button>

      </div>
      
    </>
  )
}

export default App;
