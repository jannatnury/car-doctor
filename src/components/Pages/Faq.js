import React from 'react';
import picture from '../../assets/images/faq-svg.svg';

const Faq = () => {
    return (
        <div className=" container">
            <h3 className='text-center mb-3 mt-5'>Frequently Asked Questions</h3>
            <div id='section-faq' className='row shadow conatiner m-auto d-flex align-items-center justify-content-evenly'>
                <div className="col-12 col-lg-6 order-lg-last order-sm-first faq-image me-sm-3 mb-3 me-2">
                    <img className='img-fluid' src={picture} alt="image" />
                </div>

                <div className="col-12 col-lg-6 order-lg-first order-sm-last">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Can I cancel placed order ?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Yes.</strong>You can cancel order untill you pay for it.After receiving payment we don't allow order censelation.Check our trem and condition for more informations.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Can I return damaged products ?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Yeah.</strong> You can return if you get any damaged product from us.We give you one day checking period.After that we won't took back damaged products.Check trem and conditions for more info.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Can I order single product ?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Sorry.</strong> You can't order single products from us.We have our minimum order quantity depending on products.Check out minimum order umber please.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;