import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
const PetForm = () => {
    const [name, setName] = useState(""); 
    const [type, setType] = useState("");
    const [description, setDesciption] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState([]); 
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pet', {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        })
            .then(res=>navigate("/"))
            .catch(err=>console.log(err))
    }
    return (
        <form onSubmit={onSubmitHandler} className='form-grid'>
            <fieldset>
                <p>
                    <label>Pet Name:</label><br/>
                    <input type="text" onChange = {(e)=>setName(e.target.value)}/>
                </p>
                <p>
                    <label>Pet Type:</label><br/>
                    <input type="text" onChange = {(e)=>setType(e.target.value)}/>
                </p>
                <p>
                    <label>Pet Description:</label><br/>
                    <input type="text" onChange = {(e)=>setDesciption(e.target.value)}/>
                </p>
                <input type="submit" value="Add Pet"/>
            </fieldset>
            <fieldset>
                <p>Skills (optional):</p>
                <p>
                    <label>Skill 1:</label><br/>
                    <input type="text" onChange = {(e)=>setSkillOne(e.target.value)}/>
                </p>
                <p>
                    <label>Skill 2:</label><br/>
                    <input type="text" onChange = {(e)=>setSkillTwo(e.target.value)}/>
                </p>
                <p>
                    <label>Skill 3:</label><br/>
                    <input type="text" onChange = {(e)=>setSkillThree(e.target.value)}/>
                </p>
            </fieldset>
        </form>
    )
}
export default PetForm;