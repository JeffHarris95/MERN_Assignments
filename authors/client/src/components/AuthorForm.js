import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
const PetForm = () => {
    const [name, setName] = useState(""); 
    const [errors, setErrors] = useState([]); 
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', {
            name
        })
            .then(res=>navigate("/"))
            .catch(err=>console.log(err))
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <fieldset>
                <p>
                    <label>Name:</label><br/>
                    <input type="text" onChange = {(e)=>setName(e.target.value)}/>
                </p>
                <input type="submit" value="Submit"/>
            </fieldset>
        </form>
    )
}
export default PetForm;