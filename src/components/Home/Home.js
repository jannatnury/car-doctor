import React from 'react';
import Banner from '../Pages/Banner';
import Cards from '../Pages/Cards';
import Reviews from '../Pages/Reviews';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Cards></Cards>
            {/* <Services></Services> */}
            <Reviews></Reviews>
            
        </div>
    );
};

export default Home;