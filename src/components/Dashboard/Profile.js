import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { auth } from '../../firebase.init';

const Profile = () => {

    const [user,loading]=useAuthState(auth);
    
    const { data:profileData,isLoading } = useQuery(['profileData'], () => fetch(`https://agile-wildwood-78476.herokuapp.com/api/users/profile/${user.email}`).then(res => res.json()));
    console.log(profileData);

        if(isLoading || loading){
            return("Loading..");
        }

    return (
        <div className='row d-flex align-items-center'>
            <div className="col-12 col-lg-6">
                <img id='profile' className='img-fluid' src="https://manforhimself.com/wp-content/uploads/2022/01/andrew-garfield-wavy-quiff-mens-hairstyles-man-for-himself-ft.jpg?v=1641480718" alt="" />
            </div>
            <div className="col-12 col-lg-6 p-4">
                <h3 className='mb-0'>{user?.email}</h3>
                <small>Bio : {profileData?.bio || "Web developer"}</small>
                <p className='mt-3'>{profileData?.description || "My goal is to become a skilled web developer.Now i am a student.I am studying Bsc in CSE.My graduation is going to be complete soon.After that , I'll try my best to get a good job and serve the company by the skills I have gained from this course. I have higher desire to get job in renowned software firm."}</p>
                <p>Skill : Javascript,React,Bootstrap,MongoDb</p>
            </div>

        </div>
    );
};

export default Profile;