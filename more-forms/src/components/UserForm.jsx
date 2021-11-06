import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstNameError("First Name must be atleast 2 characters.");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setLastNameError("Last Name must be atleast 2 characters.");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailError("Email must be atleast 5 characters.");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8 && e.target.value.length > 0) {
            setPasswordError("Password must be atleast 8 characters.");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length > 0 && (password !== e.target.value)) {
            setConfirmPasswordError("Passwords must match.");
        } else {
            setConfirmPasswordError("");
        }
    }
    
    return(
        <div>
            <form onSubmit={ (e) => e.preventDefault() }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" value={firstName} onChange={ handleFirstName } />
                    {
                        firstNameError ?
                        <p>{ firstNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastName} onChange={ handleLastName } />
                    {
                        lastNameError ?
                        <p>{ lastNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ handleEmail } />
                    {
                        emailError ?
                        <p>{ emailError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ handlePassword } />
                    {
                        passwordError ?
                        <p>{ passwordError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={ handleConfirmPassword } />
                    {
                        confirmPasswordError ?
                        <p>{ confirmPasswordError }</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>
    );
};
    
export default UserForm;
