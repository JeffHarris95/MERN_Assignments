import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router'
import { navigate } from '@reach/router';
const Update = (props) => {
    const { id } = props;
    const [name, setName] = useState();
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setName(res.data.name);
            })
        .catch(err => console.log(err))
    }, [])
    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/' + id, {
            name
        })
            .then(res=>navigate("/"))
    }
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={"/"}><p className='back'>Back to Home</p></Link>
            <h2>Edit this author:</h2>
            <form onSubmit={updateAuthor}>
                <fieldset>
                    <p>
                        <label>Name:</label><br />
                        <input type="text" 
                        name="name" 
                        value={name} 
                        onChange={(e) => { setName(e.target.value) }} />
                    </p>
                    <input type="submit" value="Submit" />
                </fieldset>
            </form>
        </div>
    )
}
export default Update;