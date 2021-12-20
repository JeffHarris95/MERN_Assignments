import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import AuthorList from '../components/AuthorList';
const Main = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            });
    },[]);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId)); 
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={"/author/new"}><p>Add an author</p></Link>
            <h2>We have quotes by:</h2>
            {loaded && <AuthorList authors = {authors} removeFromDom={removeFromDom} />}
        </div>
    )
}
export default Main;