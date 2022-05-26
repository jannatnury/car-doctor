import React from 'react';
import heroImg from '../../assets/images/car3.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen mt-0   g-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={heroImg} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold image-full">Welcome to <span className='logo text-red-600'>Car Doctor</span> </h1>
                    <p className="py-6 text-2xl">Find parts and information for your classic car with the help of our technical manuals and helpful community.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;