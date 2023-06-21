import React, { useState } from 'react';

const UserForm = (props) => {
    const [ userName, setUserName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');

    const createUser = (e) => {
        // prevent default browser reset to preserve state data
        e.preventDefault();

        // with ES6 shorthands for building an obj
        const newUser = { userName, email, password };
        console.log('Welcome', newUser);
        setUserName('');
        setEmail('');
        setPassword('');
    };
    return (
    <form onSubmit={ createUser }>
        <div>
            <label>Username: </label>
            <input type='text' value={userName} onChange={ (e) => 
            setUserName(e.target.value)} />
        </div>
        <div>
            <label>Email Address</label>
            <input type='text' value={email} onChange={ (e) => 
            setEmail(e.target.value)}/>
        </div>
        <div>
            <label>Password: </label>
            <input type='text' value={password} onChange={(e)=>
            setPassword*(e.target.value)} />
        </div>
        <input type='submit' value='Create User' />
    </form>
  );
};

export default UserForm;