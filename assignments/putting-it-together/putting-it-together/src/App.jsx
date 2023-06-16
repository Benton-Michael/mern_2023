import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PersonCard from './components/PersonCard'
import './App.css'

const peopleArray = [
  {
    firstName:'Jane',
    lastName: 'Doe',
    age: 40,
    hairColor: 'Pink',
  },
  {
    firstName: 'Paula',
    lastName: 'Peterson',
    age: 20,
    hairColor: 'Red'
  },
  {
    firstName: 'Joel',
    lastName: 'Tango',
    age: 29,
    hairColor: 'Blue'
  },
  {
    firstName: 'Janice',
    lastName: 'Cologne',
    age: 50,
    hairColor: 'Green'
  },
  {
    firstName: 'Lance',
    lastName: 'Lancelot',
    age: 35,
    hairColor: 'Purple'
  },
];
function App() {
  return (
    <div className="App">
    {peopleArray.map((personObject, index) => (
        <PersonCard
          key={index}
          firstName={personObject.firstName}
          lastName={personObject.lastName}
          age={personObject.age}
          hairColor={personObject.hairColor} 
        />
      ))}
      </div>
  );
}

export default App;
