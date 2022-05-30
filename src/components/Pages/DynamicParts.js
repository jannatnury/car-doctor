import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';


const DynamicParts = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams();
    const { data: product,isLoading, refetch } = useQuery(['manageProducts',id], () => fetch(`http://localhost:5000/api/products/${id}`).then(res => res.json()));

    if(isLoading){
        return <h1>isLoading</h1>
    }
    const { name, img, details, supplier, price, quantity,model } = product;
    console.log(product);

    const handleStock = (e) => {
        e.preventDefault();
        const id = product._id;
        const qtn = e.target.shipped.value;
        const order = {
            user:user?.email,
            product:product._id,
            productName:product.name,
            quantity : qtn,
            price:price,     
        }
        console.log(order);
        const url = `http://localhost:5000/api/order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)

        })
            .then(res => res.json())
            .then(data => console.log(data))

    }

    return (
        <div className='row container ms-auto my-5 m-auto d-flex align-items-center'>
           
            <div className="col-12 col-lg-6">
                <img className='img-fluid me-4' src={img} alt="" />
            </div>
            <div className="col-12 col-lg-6 shadow p-4">
                <h2>Name:{name}</h2>
                <p>Model:{model}</p>
                <p>Quantity:{quantity}</p>
                <p>Supplier:{supplier}</p>
                <p>Price:{price}</p>
                <p>Details:{details}</p>
                <form onSubmit={handleStock}>
                    <div className='mb-2'>
                        <label htmlFor='update'>Update Stock</label>
                        <div>
                            <input className='w-100'
                                type='text' name="shipped" placeholder='Enter number'
                                required
                            />
                        </div>
                    </div>
                    <input type="submit" className='btn btn-dark d-block w-100' value="order" />
                </form>
            </div>
        </div>
    );
};

export default DynamicParts;