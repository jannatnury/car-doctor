import React from 'react';
import Service from './Service';
import img from '../../assets/images/labb.png';
import img2 from '../../assets/images/gear.png';
import img3 from '../../assets/images/delivery.jpg';

const Services = () => {
    return (
        <div className='bg-slate-50 p-3'>
            <div className="text-center">
                <h3 className='text-cyan-700 fw-bold'>OUR SERVICES</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-2'>
                <Service title="Lab Tests" details="lorem20" img={img}></Service>
                <Service title="Setting" details="lorem20" img={img2}></Service>
                <Service title="Free Delivery" details="lorem20" img={img3}></Service>
            </div>
        </div>
    );
};

export default Services;