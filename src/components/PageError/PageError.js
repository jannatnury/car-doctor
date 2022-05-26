import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../assets/images/404-error.webp';

const PageError = () => {
    return (
        <div className=''>
            <div className='text-center mt-2 mb-5 pb-5 mx-5'>
                <h1 className='fw-bolder mt-4 text-3xl'>Oopss! Sorry for that...</h1>
                <img className='w-75 mx-auto d-block my-4' src={errorImg} alt="404 image" />
                <h1 className='fw-bolder mt-2 text-3xl'>Page Not Found</h1>
                <p>We're sorry, the page you requested could not be found. <br></br> Please go back to the homepage.</p>
                <Link className='btn btn-dark rounded-10' to='/home'>GO HOME</Link>
            </div>

        </div>
    );
};

export default PageError;