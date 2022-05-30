import React from 'react';

const Profile = () => {

    
    return (
        <div className='row d-flex align-items-center'>
            <div className="col-12 col-lg-6">
                <img id='profile' className='img-fluid' src="https://manforhimself.com/wp-content/uploads/2022/01/andrew-garfield-wavy-quiff-mens-hairstyles-man-for-himself-ft.jpg?v=1641480718" alt="" />
            </div>
            <div className="col-12 col-lg-6 p-4">
                <h3 className='mb-0'>Jannat Nury</h3>
                <small>Junior font-end web developer</small>
                <p className='mt-3'>My goal is to become a skilled web developer.Now i am a student.I am studying Bsc in CSE.My graduation is going to be complete soon.After that , I'll try my best to get a good job and serve the company by the skills I have gained from this course. I have higher desire to get job in renowned software firm.</p>
                <p>Skill : Javascript,React,Bootstrap,MongoDb</p>
            </div>

        </div>
    );
};

export default Profile;