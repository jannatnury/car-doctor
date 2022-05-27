import React from 'react';
import Banner from '../Pages/Banner';
import Cards from '../Pages/Cards';
import Faq from '../Pages/Faq';
import Reviews from '../Pages/Reviews';
import Services from '../Pages/Services';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Cards></Cards>
            <Services></Services>
            <Faq></Faq>
            <Reviews></Reviews>
            
        </div>
    );
};

export default Home;