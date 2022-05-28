import React from 'react';

const Summary = () => {
    return (
        <div id='summary' className='row container bg-secondary w-75 text-white pt-3 m-auto my-5'>
            <div className="col-12 col-lg-4">
                <p className='mb-0'>Daily Order</p>
                <h5 className='fw-bolder'>12K</h5>
                <p></p>
            </div>
            <div className="col-12 col-lg-4">
                <p className='mb-0'>Total Clients</p>
                <h5 className='fw-bolder'>5200</h5>
                <p></p>
            </div>
            <div className="col-12 col-lg-4">
                <p className='mb-0'>Pending Delivery</p>
                <h5 className='fw-bolder'>4500</h5>
                <p></p>
            </div>
            
        </div>
    );
};

export default Summary;