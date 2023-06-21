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
        <div>
            <form style= {{ marginTop: '20px' }}>
                <div style= {{ inputDataDivStyle }}>
                    <label htmlFor='firstName'>First Name:</label>
                    <input 
                        type='text'
                        name='firstName'
                        onChange={ (e) => setFirstName(e.target.value) }
                    />
                <div style= {{ inputDataDivStyle }}>
                    
                </div>
                </div>
            </form>
        </div>

    )
}

export default Form;