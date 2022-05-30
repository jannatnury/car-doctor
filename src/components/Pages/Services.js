import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Services = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    // console.log(products);
    return (
        <div className='p-3'>
            <h6 className='text-cyan-700 text-center'>OUR PRODUCTS</h6>
            <h2 className='text-3xl text-center'>Services We Provide</h2>
            <div className='row container m-auto'>
                {
                    products.map(product=> 
                        <SingleService key={product._id}
                        product={product}></SingleService>
                    )
                }
            </div>
        </div>
    );
};

export default Services;