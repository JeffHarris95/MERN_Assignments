import React from 'react'
import { Link } from '@reach/router'
import axios from 'axios';
const ProductList = (props) => {
    const { removeFromDom, products} = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {products.map((product, idx)=>{
                return (
                    <div>
                        <Link to={"/product/" + product._id}><p key={idx}>{product.title}</p></Link>
                        <Link to={"/product/" + product._id + "/edit"}>Edit</Link>
                        <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
export default ProductList;