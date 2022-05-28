import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({product}) => {

    const {name,img,price,supplier,details,quantity,model}=product;
    return (
        <div className='col-lg-4 col-sm-12 mt-3 h-100'>
            <div className='p-3 h-100'>
                <div className="shadow row justify-content-between align-items-center card-container h-100">
                    <div>
                        <img src={img} className="card-img" alt="card image" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-secondary font-monospace">{name}</h5>
                        <p>Model : <span className='fw-bold'>{model}</span></p>
                        <p>Suppier : <span className='fw-bold'>{supplier}</span> </p>
                        <p>Quantity: <span className='fw-bold'>{quantity}</span></p>
                        <p>Minimum Order : <span className='fw-bold'>50</span></p>
                        <p>Price: <span className='fw-bold'>{price}</span></p>
                        <button className='button' type="submit">
                            <Link to="/">Order Now</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;