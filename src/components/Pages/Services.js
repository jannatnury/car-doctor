import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setProducts(data));
    },[]);
    return (
        <div className='bg-slate-50 p-3'>           
                <h3 className='text-cyan-700 fw-bold text-center'>OUR SERVICES</h3>
                <h2 className='text-3xl text-center'>Services We Provide</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-2'>
                {
                    products?.map(product=> {<Service
                    product={product}></Service>})
                }
            </div>
        </div>
    );
};

export default Services;