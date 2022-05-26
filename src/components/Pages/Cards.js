import React from 'react';
import icon from '../../assets/icons/clock.svg';
import icon2 from '../../assets/icons/marker.svg';
import icon3 from '../../assets/icons/phone.svg';

const Cards = () => {
    return (
        <div className='row container m-auto'>
            <div className="col-12 col-lg-4">
                <div id='card01' className='d-flex align-items-center justify-content-center p-3'>
                    <img src={icon} alt="" />
                    <p className='ms-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum ducimus natus velit commodi! Suscipit, iusto expedita ipsam sunt quisquam minus adipisci vitae officia ab tempore sint tempora dicta soluta?</p>
                </div>
            </div>
            <div id='card02' className="col-12 col-lg-4">
                <div className='d-flex align-items-center justify-content-center bg-secondary p-3'>
                    <img src={icon2} alt="" />
                    <p className='ms-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolor consequuntur minus eum nesciunt sint sapiente eius perferendis unde tenetur expedita molestias numquam aspernatur aliquam, commodi cumque qui itaque in.</p>
                </div>
            </div>
            <div id='card03' className="col-12 col-lg-4">
                <div className='d-flex align-items-center justify-content-center bg-secondary p-3'>
                    <img src={icon3} alt="" />
                    <p className='ms-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit at suscipit est alias accusantium consectetur rem qui, provident animi sit sequi eos modi id odio fuga aperiam, voluptate ut quisquam.</p>
                </div>
            </div>

        </div>
    );
};

export default Cards;