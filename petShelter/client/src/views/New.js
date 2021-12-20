import React from 'react';
import { Link } from '@reach/router';
import PetForm from '../components/PetForm';
import "../styles.css";
const Main = () => {
    return (
        <div className='container'>
            <h1>Pet Shelter</h1>
            <Link to={"/"}><p className='back'>Back to Home</p></Link>
            <h2>Know a pet needing a home?</h2>
            <PetForm/>
        </div>
    )
}
export default Main;

