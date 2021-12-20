import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router'
import { navigate } from '@reach/router';
import "../styles.css";
const Update = (props) => {
    const { id } = props;
    const [name, setName] = useState();
    const [type, setType] = useState();
    const [description, setDescription] = useState();
    const [skillOne, setSkillOne] = useState();
    const [skillTwo, setSkillTwo] = useState();
    const [skillThree, setSkillThree] = useState();
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkillOne(res.data.skillOne);
                setSkillTwo(res.data.skillTwo);
                setSkillThree(res.data.skillThree);
            })
        .catch(err => console.log(err))
    }, [])
    const updatePet = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pet/' + id, {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree 
        })
            .then(res=>navigate("/"))
    }
    return (
        <div className='container'>
            <h1>Pet Shelter</h1>
            <Link to={"/"}><p className='back'>Back to Home</p></Link>
            <h2>Edit {name}</h2>
            <form onSubmit={updatePet} className='form-grid'>
                <fieldset>
                    <p>
                        <label>Pet Name:</label><br />
                        <input type="text" 
                        name="name" 
                        value={name} 
                        onChange={(e) => { setName(e.target.value) }} />
                    </p>
                    <p>
                        <label>Pet Type:</label><br />
                        <input type="text" 
                        name="type"
                        value={type} 
                        onChange={(e) => { setType(e.target.value) }} />
                    </p>
                    <p>
                        <label>Pet Description:</label><br />
                        <input type="text" 
                        name="description"
                        value={description} 
                        onChange={(e) => { setDescription(e.target.value) }} />
                    </p>
                    <input type="submit" value="Edit Pet" />
                </fieldset>
                <fieldset>
                <p>Skills (optional):</p>
                <p>
                    <label>Skill 1:</label><br />
                    <input type="text" 
                    name="skillOne"
                    value={skillOne} 
                    onChange={(e) => { setSkillOne(e.target.value) }} />
                </p>
                <p>
                    <label>Skill 2:</label><br />
                    <input type="text" 
                    name="skillTwo"
                    value={skillTwo} 
                    onChange={(e) => { setSkillTwo(e.target.value) }} />
                </p>
                <p>
                    <label>Skill 3:</label><br />
                    <input type="text" 
                    name="skillThree"
                    value={skillThree} 
                    onChange={(e) => { setSkillThree(e.target.value) }} />
                </p>
                </fieldset>
            </form>
        </div>
    )
}
export default Update;