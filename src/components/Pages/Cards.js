import React from 'react';
import SingleCard from './SingleCard';
import icon from '../../assets/icons/clock.svg';
import icon2 from '../../assets/icons/marker.svg';
import icon3 from '../../assets/icons/phone.svg';

const Cards = () => {
    return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
         <SingleCard cardDetails="Open from 9 am to 10 pm." cardTitle="Opening Hours" bgClass="bg-cyan-100" img={icon}></SingleCard>
         <SingleCard cardDetails="60,Jannat Nury Street,Dhaka" cardTitle="Our Location" bgClass="bg-slate-200" img={icon2}></SingleCard>
         <SingleCard cardDetails="+01345780" cardTitle="Contract Us" bgClass="bg-cyan-100" img={icon3}></SingleCard>
        
    </div>
    );
};

export default Cards;