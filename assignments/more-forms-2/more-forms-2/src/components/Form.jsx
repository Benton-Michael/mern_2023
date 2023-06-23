import React, {useState} from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPW, setConfirmPW] = useState("");
    const [confirmPWError, setConfirmPWError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0){
            setFirstNameError("First name must be 2 characters or longer!");
        }
        else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0){
            setLastNameError("Last name must be 2 characters or longer!");
        }
        else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailError("Email must be at least 5 characters!");
        }
        else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8 && e.target.value.length > 0) {
            setPasswordError("Password must be at least 8 characters!");
        }
        else {
            setPasswordError("");
        }
    }

    const handleConfirm = (e) => {
        setConfirmPW(e.target.value);
        if (e.target.value !== password && e.target.value.length > 0) {
            setConfirmPWError("Confirm password must match password!");
        }
        else {
            setConfirmPWError("");
        }
    }

    const createUser = (e) => {

        e.preventDefault();

        const newUser = {firstName, lastName, email, password, confirmPW}
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPW("");
        setHasBeenSubmitted(true);
    };
    // form message is now in the ternary statement
    // formMessage
    // const formMessage = () => {
    //     if (hasBeenSubmitted) {
    //         return "Thank you for submitting your form!";
    //     } 
    //     else {
    //         return "Welcome, Please submit the form!";
    //     }
    // };

    return (
        <div>
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted ? <h3>Thank you for submitting your form!</h3> : <h3>Welcome, Please sumbit the form!</h3>
                }
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={handleFirstName}/>
                    { firstNameError ? <p> {firstNameError} </p> : ''}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={handleLastName}/>
                    { lastNameError ? <p> {lastNameError} </p> : ''}
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" value={email} onChange={handleEmail}/>
                    { emailError ? <p> {emailError} </p> : ''}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" value={password} onChange={handlePassword}/>
                    { passwordError ? <p> {passwordError}</p> : ''}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" value={confirmPW} onChange={handleConfirm}/>
                    { confirmPWError ? <p> {confirmPWError}</p> : ''}
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: { firstName }</p>
                <p>Last Name: { lastName }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { confirmPW }</p>
            </div>
        </div>
    )
}

export default Form;