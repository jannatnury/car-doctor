import React from 'react';

const Service = ({img,title,details}) => {
    return (
        <div class="card lg:max-w-xs bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="services" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>{details}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;