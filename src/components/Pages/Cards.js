import React from 'react';
import icon from '../../assets/icons/clock.svg';
import icon2 from '../../assets/icons/marker.svg';
import icon3 from '../../assets/icons/phone.svg';

const Cards = () => {
    return (
        <div className='row container m-auto'>
            <div className="col-12 col-lg-4 mb-3">
                <div id='card01' className='d-flex align-items-center justify-content-center p-3'>
                    <img src={icon} alt="" />
                    <div className='ms-3'>
                        <h3>Opening Hours</h3>
                        <p>We are open from 9 am to 10 pm. Weekly off day is Friday.</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-4 mb-3">
                <div id='card02' className='d-flex align-items-center justify-content-center p-3'>
                    <img src={icon2} alt="" />
                    <div className='ms-3'>
                        <h3>Our Location</h3>
                        <p>We have five showrooms on different area.check links below and visit us.</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-4 mb-3">
                <div id='card03' className='d-flex align-items-center justify-content-center  p-3'>
                    <img src={icon3} alt="" />
                    <div className='ms-3 pb-2'>
                        <h3>Contruct Us</h3>
                        <p>+88023466788</p>
                        <p>+88043466788</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cards;