import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';
import "../styles.css";
const Detail = (props) => {
    const [pet, setPet] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + props.id)
            .then(res => setPet({
                ...res.data
            }))
    }, [])

    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pet/' + petId)
            .then(res => {
                navigate("/")
            })
            .catch(err => console.log(err))

    }
    return (
        <div className='container'>
            <h1>Pet Shelter</h1>
            <Link to={"/"}><p className='back'>Back to Home</p></Link>
            <h2>Details about: {pet.name}</h2>
            <button onClick={(e)=>{deletePet(pet._id)}}>Adopt {pet.name}</button>
            <div className='box'>
                <p>Pet Type: {pet.type}</p>
                <p>Description: {pet.description}</p>
                <p>Skills:</p>
                <ul>
                    <li>{pet.skillOne}</li>
                    <li>{pet.skillTwo}</li>
                    <li>{pet.skillThree}</li>
                </ul>
            </div>
        </div>
    )
}
export default Detail;