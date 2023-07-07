import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Shows from './components/Shows'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>useState with props</h1>
      <Shows title={'Breaking Bad'} releaseYear={'2008'} sales={10} />
      <Shows title={'Attack on Titan'} releaseYear={'2013'} sales={20} />
      <Shows title={'The Office'} releaseYear={'2005'} sales={30} />
      

    </div>
  );
}

export default App;
