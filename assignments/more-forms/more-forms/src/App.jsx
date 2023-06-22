import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';

const App = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPW, setConfirmPW] = useState('');


  return (
    <div className='App'>
    
      <form onSubmit={() => {}}>
        <div>
          <label htmlFor='firstName'>First Name: </label>
          <input
            type='text'
            onChange={ (e) => setFirstName(e.target.value)}
          />
        </div>
        {firstName.length < 2 && firstName.length > 0 ? (
          <p>First name must be at least 2 characters</p>
        ) : null}

        <div>
          <label htmlFor='lastName'>Last Name:</label>
          <input
            type='text'
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        {lastName.length < 2 && lastName.length > 0 ? (
          <p>Last name must be at least 2 characters</p>
        ) : null}

        <div>
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {email.length < 5 ?
          <p>Email must be at least 5 characters</p>
        : null}

        

      </form>
    
    </div>
  )
}

export default App
