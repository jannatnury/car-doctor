import React from 'react';
import image from '../../assets/images/boy1.png';
import image2 from '../../assets/images/girl1.png';
import image3 from '../../assets/images/boy02.png';

const Reviews = () => {
    return (
        <div className='row container m-auto'>
            <div className="col-12 col-lg-4 mb-3">
                <div id='review1' className='d-flex align-items-center justify-content-center p-3'>
                    <img src={image} alt="customer-img" />
                    <div className='ms-3'>
                        <h4>Jhon Abraham</h4>
                        <p>Your services are too good.Afortable and 100% original parts.I also love free home delivery :p</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-4 mb-3">
                <div id='review2' className='d-flex align-items-center justify-content-center p-3'>
                    <img src={image2} alt="customer-img" />
                    <div className='ms-3'>
                        <h4>Jannat Nury</h4>
                        <p>I visited your shop once.After that i always order from online.I didn't found anything wrong till now.Great services.</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-4 mb-3">
                <div id='review3' className='d-flex align-items-center justify-content-center  p-3'>
                    <img src={image3} alt="customer-img" />
                    <div className='ms-3 pb-2'>
                        <h4>Ahil Anan</h4>
                        <p>Their services is too good.I am buying from them science 5 years.They provide all original parts.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Reviews;