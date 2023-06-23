import React, { useReducer } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const EMAIL_REGEX = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/;

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
}

const reducer = (state, action) => {
    return {
        ...state,
        [action.type]: action.payload
    };
}

const UserForm = () => {
    const [state,dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        let error=null;
        if(name==='firstName' && value !== ''){
            error = value.length>=2 ? '' : "First name must be longer than 2 characters!";
        }
        else if(name==='lastName' && value !== ''){
            error = value.length>=2 ? '' : "Last name must be longer than 2 characters!";
        }
        else if(name==='email' && value !== ''){
            error = value.match(EMAIL_REGEX) ? '' : "Please enter a valid email address!";
        }
        dispatch({
            type: name,
            payload: {
                value: value,
                error: error
            }
        });
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = [state.firstName.value, state.lastName.value, state.email.value];
        let canSubmit = true;
        for(let item in state){
            if(state[item].error!=='' || state[item].value===''){
                canSubmit = false;
            }
        }
        console.log("Welcome", newUser, canSubmit);
    }

    return (
        <div className="row mx-auto border border-dark">
            <form onSubmit={ createUser }>
                <div className="row">
                    <div>
                        <label><span>First Name:</span>{' '}</label>
                        <input className="form-control" name="firstName" value={state.firstName.value} onChange={ handleChange } />
                        { state.firstName.error ? <p className="text-danger">{ state.firstName.error }</p> : '' }
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label><span>Last Name:</span>{' '}</label>
                        <input className="form-control" name="lastName" value={state.lastName.value} onChange={ handleChange } />
                        { state.lastName.error ? <p className="text-danger">{ state.lastName.error }</p> : '' }
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label><span>Email:</span>{' '}</label>
                        <input className="form-control" name="email" value={state.email.value} onChange={ handleChange } />
                        { state.email.error ? <p className="text-danger">{ state.email.error }</p> : '' }
                    </div>
                </div>
                <div>
                    <input className="form-control btn-primary mx-auto" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}

export default UserForm;