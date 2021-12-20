import React from 'react';
import { Link } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
const Main = () => {
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={"/"}><p>Back to Home</p></Link>
            <h2>Add a new author:</h2>
            <AuthorForm/>
        </div>
    )
}
export default Main;

