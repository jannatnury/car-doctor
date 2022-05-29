import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <div className='row container d-flex align-items-center m-auto mt-5 '>
                <div className="col-12 col-lg-6">
                    <img className='img-fluid mb-sm-3' src="https://i.ibb.co/D7v1Qxp/portfolio.jpg" alt="" />
                </div>
                <div className="col-12 col-lg-6 p-4 bg-light portfolio shadow">
                    <h3 className='mb-0'>Jannat Nury</h3>
                    <small>Junior font-end web developer</small>
                    <p className='mt-3'>My goal is to become a skilled web developer.Now i am a student.I am studying Bsc in CSE.My graduation is going to be complete soon.After that , I'll try my best to get a good job and serve the company by the skills I have gained from this course. I have higher desire to get job in renowned software firm.</p>
                    <p>Skill : Javascript,React,Bootstrap,MongoDb</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 m-auto text-center my-5">
                    <h5>Email : jannatnury253@gmail.com</h5>
                    <h5>Contact : +88093476349</h5>

                </div>
            </div>
        </div>
    );
};

export default Portfolio;