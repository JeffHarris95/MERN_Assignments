import React from 'react'
import { Link } from '@reach/router'
import axios from 'axios';
const AuthorList = (props) => {

    const { removeFromDom, authors} = props;
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {authors.map((author, idx)=>{
                    return (
                        <tbody>
                            <tr>
                                <td>{author.name}</td>
                                <td><button onClick={(e)=>{deleteAuthor(author._id)}}>Delete</button><Link to={"/author/" + author._id + "/edit"}><p>Edit</p></Link></td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}

export default AuthorList;