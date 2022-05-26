import React from 'react';

const Service = ({product}) => {
    const {name,img,price,quantity,supplier,details}=product;
    return (
        <div className="card lg:max-w-xs bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="services" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price :{price}</p>
                <p>Quantity :{quantity}</p>
                <p>Details :{details}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;