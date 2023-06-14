import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
      <h1>Hello Dojo!</h1>
      <h3>Things I need to do:</h3>
      <ul>
        <li>Boogy with React</li>
        <li>Climb Mt. Wilson</li>
        <li>Walk a marathon</li>
        <li>Feed the elephants</li>
      </ul>
      </div>
  );
}

export default App
