import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const ManageProduct = () => {
    const { data: products,id, isLoading, refetch } = useQuery(['manageProducts'], () => fetch(`http://localhost:5000/products/`).then(res => res.json()));
    console.log(products);

    // ------------
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handleDeleteProduct = id => {
        console.log(id);
        const confirm = window.confirm('Areyou want to delete');
        if (confirm) {
            axios.delete(`http://localhost:5000/api/products/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert("Product Is Deleted Successfully!!");
                        const remainingOrders = product.filter(product => product.id !== id);
                        setProduct(remainingOrders);
                    }
                })
        }
    }

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">PRODUCT NAME</th>
                    <th scope="col">MODEL</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">QUANTITY</th>
                    <th scope="col">Edit</th>
                    <th scope="col">DELETE</th>
                </tr>
            </thead>
            <tbody>

                {
                    products?.map(p => {
                        return (
                            <tr key={p._id} className="hover">
                                <td>{p?.name}</td>
                                <td>{p?.model}</td>
                                <td>{p?.price}</td>
                                <td>{p?.quantity}</td>
                                <td>{p?.paid ? p?.transactionId : 'Unpaid'}</td>
                                <td>
                                    <button onClick={()=>handleDeleteProduct(p._id)} className='border-0'> Action</button>

                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default ManageProduct;