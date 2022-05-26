import React from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../../assets/images/logo.png';
import googleLogo from '../../assets/images/google-logo.png';

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className=" px-4">
                <div className="py-4 row justify-content-between text-start">
                    <div className="mt-4 col-lg-2 col-sm-6 order-lg-2 order-xs-2">
                        <h6 className="mb-4 text-white"><span className="border-2 border-bottom border-main">Quick Links</span></h6>
                        <Link className="my-2 text-decoration-none d-block text-secondary footer-hover" to="/info">FAQ</Link>
                        <Link className="my-2 text-decoration-none d-block text-secondary footer-hover" to="/feedback">Feedback</Link>
                        <Link className="my-2 text-decoration-none d-block text-secondary footer-hover" to="/career">Career</Link>
                        <Link className="my-2 text-decoration-none d-block text-secondary footer-hover" to="/payment">Payment Options</Link>
                        <Link className="my-2 text-decoration-none d-block text-secondary footer-hover" to="/return">Return Policy</Link>
                    </div>
                    <div className="mt-4 mb-3 text-white col-lg-4 col-sm-6 order-lg-3 order-xs-1">
                        <h6 className="mb-3 text-white"><span className="border-2 border-bottom border-main">Connect With Us</span></h6>
                        <div className="my-2 d-flex text-secondary">
                            <small className="col-1"><i className="text-white fas fa-map-marker-alt"></i></small>
                            <small className='footer-hover'>60, Jannat Nury Street,<br />Programming Hero, Bangladesh</small>
                        </div>
                        <div className="my-2 d-flex text-secondary">
                            <small className="col-1"><i className="text-white fas fa-phone-alt"></i></small>
                            <small className='footer-hover'>111, +01345780</small>
                        </div>
                        <h6 className="mt-4 mb-4 text-white"><span className="border-2 border-bottom border-main">Get Discount Alerts</span></h6>
                        <div className="row justify-content-between">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="button-addon2" required />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 col-lg-4 col-sm-12 order-lg-1 order-xs-3">
                        <div className="pb-2">
                            <Link className="navbar-brand d-flex align-items-center" to="/home">
                                <img className='d-block' src={brandLogo} alt="brand logo" />
                
                            </Link>
                        </div>
                        <small className="text-secondary d-block">We are a Bangladeshi multinational <span className="text-white pe-1">brush making</span> company, founded on 2000 , in Dhaka, Bangldesh.</small>
                        <div className="mt-4 mb-2">
                            <Link to="/social"><i className="ico text-white pe-3 fab fa-facebook-f"></i></Link>
                            <Link to="/social"><i className="ico text-white pe-3 fab fa-twitter"></i></Link>
                            <Link to="/social"><i className="ico text-white pe-3 fab fa-google-plus-g"></i></Link>
                            <Link to="/social"><i className="ico text-white pe-3 fab fa-linkedin-in"></i></Link>
                        </div>
                        <small className="text-secondary">Copyright &copy; 2022. <span className="text-light">Jannat Nury.</span></small>
                        <div className='text-secondary'>
                            <Link to="*" className="text-decoration-none text-main footer-hover"><small>Desclaimer.</small></Link>
                            <Link to="*" className="px-2 text-decoration-none text-main footer-hover"><small>Terms and Conditions.</small></Link>
                            <Link to="*" className="text-decoration-none text-main footer-hover"><small>Privacy Policy.</small></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;