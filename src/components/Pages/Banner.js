import React from 'react';
import heroImg from '../../assets/images/car3.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen  g-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={heroImg} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold image-full">Welcome to <span className='text-red-600'>Parts</span>! </h1>
                    <p className="py-6">Paintbrush, bristles, nozzles, brush handles, various brand logos can be customized according to customer requirements.We also make acralic brushes.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;