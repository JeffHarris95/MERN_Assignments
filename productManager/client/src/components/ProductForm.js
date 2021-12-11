import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = () => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDesciption] = useState("");
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title:</label><br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price:</label><br/>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description:</label><br/>
                <input type="text" onChange = {(e)=>setDesciption(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default ProductForm;

