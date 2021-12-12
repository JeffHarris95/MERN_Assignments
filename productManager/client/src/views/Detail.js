import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
const Detail = (props) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                navigate("/product")
            })
            .catch(err => console.log(err))

    }
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>

            <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
        </div>
    )
}
export default Detail;