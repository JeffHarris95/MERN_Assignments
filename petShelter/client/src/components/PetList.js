import React from 'react'
import { Link } from '@reach/router'
const PetList = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {props.pets.map((pet, idx)=>{
                    return (
                        <tbody>
                            <tr>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td><Link to={"/pet/" + pet._id}><p className='p-inline'>Details</p></Link><p className='p-inline'> | </p><Link to={"/pet/" + pet._id + "/edit"}><p className='p-inline'>Edit</p></Link></td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}

export default PetList;