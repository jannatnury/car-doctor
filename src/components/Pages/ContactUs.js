import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import img from '../../assets/images/notify.jpg';

const ContactUs = () => {
    return (
        <div className='mt-5 container p-4 mb-5 m-auto'>
            <ToastContainer/>
            <h2 className='mt-3 text-center'>Give Your Feedback</h2>
            <div className='row shadow container my-4 order-sm-last m-auto d-flex align-items-center justify-content-evenly px-0'>
            <div className="col-lg-6 ps-5">
                    <img className='img-fluid ps-5' src={img} alt="" />
                </div>
                <div className="col-lg-6 ps-5">
                    <input className='p-4 my-3 shadow w-100' type="email" name="email" id="email-input" placeholder='Enter your email' required /> <br />
                    <input className='p-4 shadow w-100' type="text" placeholder='Write your comment' id="comments" required /> <br />
                    <button onClick={() => toast.info("Subscribed Successfully!")} className='button w-100 p-2 ms-0 mt-3' type="submit">Give Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;