import React from 'react';
import heroImg from '../../assets/images/carr.png';

const Banner = () => {
    return (
        <div className="row container m-auto my-5 p-3 d-flex align-items-center justify-content-between">
            <div className="col-sm-12 col-lg-6 order-lg-last d-flex justify-content-center ">
                <img src={heroImg} className="img-fluid mb-2" />
            </div>
            <div className="col-sm-12 col-lg-6 order-lg-first p-4">
                <h1>Welcome to <span className='logo fw-bolder'>CAR DOCTOR</span></h1>
                <p className="py-6 text-2xl">Find parts and information for your classic car with the help of our technical manuals and helpful community.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    );
};

export default Banner;