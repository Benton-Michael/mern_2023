import React, { useState } from 'react';

const Form = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // This object holds style options for our results div
    const formDataDivStyle = {
        textAlign: 'left',
        width: '450px',
        margin: 'auto',
    }

    const inputDataDivStyle = {
        borderRadius: '5px',
        backgroundColor: '#f2f2f2',
        border: '1px solid darkgrey',
        padding: '0px 10 px',
        margin: '5px',
    }

    // return a single react element
    return(
        <>
        <form onSubmit={() => {}}>
        <div>
            <form style= {{ marginTop: '20px' }}>
                <div style= {{ inputDataDivStyle }}>
                    <label htmlFor='firstName'>First Name: </label>
                    <input 
                        type='text'
                        name='firstName'
                        onChange={ (e) => setFirstName(e.target.value) }
                    />
                </div>
                {/* Validations moved in from App.jsx */}
                {/* validation for firstName */}
                {firstName.length < 2 && firstName.length > 0 ? (
                    <p>First name must be at least 2 characters</p>
                ) : null}

                <div style= {{ inputDataDivStyle }}>
                    <label htmlFor='lastName'>Last Name: </label>
                    <input
                        type='text'
                        name='lastName'
                        onChange= { (e) => setLastName (e.target.value) }
                    />
                </div>
                {/* validation for lastName */}
                {lastName.length < 2 && lastName.length > 0 ? (
                    <p>Last name must be at least 2 characters</p>
                ) : null}

                <div style= {{ inputDataDivStyle }}>
                    <label htmlFor='email'>Email: </label>
                    <input
                        type='text'
                        name='email'
                        onChange={ (e) => setEmail (e.target.value) }
                    />
                </div>
                {/* validation for email */}
                {email.length < 5 ? (
                    <p>Email must be at least 5 characters</p>
                ) : null}

                <div style= {{ inputDataDivStyle }}>
                    <label htmlFor='password'>Password: </label>
                    <input
                        type='password'
                        text='password'
                        onChange= { (e) => setPassword(e.target.value) }
                    />
                </div>
                {/* validation for the password */}
                {password.length < 8 ? (
                    <p>Password must be at least 8 characters</p>
                ) : null}

                <div style={{ inputDataDivStyle }}>
                    <label htmlFor='confirmPassword'>Confirm Password: </label>
                    <input
                        type='password'
                        text='confirmPassword'
                        onChange= { (e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                {/* validation to make sure passwords match*/}
                {confirmPW !== password ? (
                    <p>Passwords must match!</p>
                ):null}
            </form>
        </div>
        
            <div style={ formDataDivStyle  }>
                <h3 style={{ textAlign: 'center' }}>Your Form Data</h3>
                <p>
                    <label>First Name: </label>
                    {firstName}
                </p>
                <p>
                    <label>Last Name: </label>
                    {lastName}
                </p>
                <p>
                    <label>Email: </label>
                    {email}
                </p>
                <p>
                    <label>Password: </label>
                    {password}
                </p>
                <p>
                    <label>Confirm Password: </label>
                    {confirmPassword}
                </p>
            </div>
        </>
    );
};

export default Form;