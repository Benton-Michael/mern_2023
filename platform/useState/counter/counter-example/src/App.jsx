import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'

function App() {
  return (
      <div className='App'>
      <Product 
      title={'Litre of Water'} 
      desc={'Add 2 cups of water for a stiff drink'} 
      cost={'$147.99'}
      initialStock={200}
      />
      <Product 
      title={'Lucid Air'} 
      desc={'Electric car'} 
      cost={'$90,000'}
      initialStock={300}
      />
      <Product 
      title={'Disco Shoes'} 
      desc={'Dance in comfort and style'} 
      cost={'$3,400.00'}
      initialStock={680}
      />
      </div>
  );
}

export default App
