import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import PetList from '../components/PetList';
import "../styles.css";
const Main = () => {
    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
            .then(res => {
                setPets(res.data);
                setLoaded(true);
            });
    },[]);
    return (
        <div className='container'>
            <h1>Pet Shelter</h1>
            <Link to={"/pet/new"}><p className='back'>Add a pet to the shelter</p></Link>
            <h2>These pets are looking for a good home</h2>
            {loaded && <PetList pets = {pets} />}
        </div>
    )
}
export default Main;