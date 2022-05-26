import React from 'react';
import Banner from '../Pages/Banner';
import Cards from '../Pages/Cards';
import Services from '../Pages/Services';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Cards></Cards>
            <Services></Services>
            
        </div>
    );
};

export default Home;