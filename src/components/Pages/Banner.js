import React from 'react';
import heroImg from '../../assets/images/brush.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen  g-5">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={heroImg} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold image-full">World Of <span className='text-red-600'>Paintbrush </span>! </h1>
                    <p class="py-6">Paintbrush, bristles, nozzles, brush handles, various brand logos can be customized according to customer requirements.We also make acralic brushes.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;