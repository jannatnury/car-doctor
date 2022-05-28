import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Pages/Banner';
import Cards from '../Pages/Cards';
import ContactUs from '../Pages/ContactUs';
import Faq from '../Pages/Faq';
import Reviews from '../Pages/Reviews';
import SingleService from '../Pages/SingleService';
import Summary from '../Pages/Summary';



const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);


    return (
        <div className=''>
            <Banner />
            <Cards />
            <div>
                <div className='container mx-auto mt-5 mb-3 row g-4 '>
                    {
                        products.slice(0, 6).map(product => (<SingleService key={product.id} product={product}></SingleService>))
                    }
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='button py-2 fw-bold text-center'>
                        <Link to="/products">More Products</Link>
                    </button>
                </div>
            </div>
            <Faq />
            <Reviews />
            <Summary />
            <ContactUs/>

        </div>
    );
};

export default Home;