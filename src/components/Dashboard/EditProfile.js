import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const EditProfile = () => {
    const [user, loading] = useAuthState(auth);
    const handleSubmit = e =>{
        e.preventDefault()
        const updateData = {
            email:user.email,
            phone:e.target.phone.value,
            education:e.target.education.value,
            location:e.target.location.value,
            description:e.target.description.value,
            bio:e.target.bio.value,
            github:e.target.github.value

        }
        axios.put(`https://agile-wildwood-78476.herokuapp.com/api/users/profile`,{updateData})
                .then(res => res.json())
    }
    return (
        <div className='container p-5 pt-0'>
            <div className='col-md-6 mx-auto p-5 shadow rounded-10 bg-light'>
                <h2 className="text-center">Edit Your Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2 mt-2'>
                        <label htmlFor='name'>Full Name</label>
                        <div>
                            <input className="form-control" type='text' name='name'
                                id='name' disabled placeholder={`${user?.displayName}`} />
                        </div>
                    </div>
                    <div className='mb-2 mt-2'>
                        <label htmlFor='email'>Email Address</label>
                        <div>
                            <input className="form-control" type='text' name='email'
                                id='email' disabled placeholder={`${user?.email}`} />
                        </div>
                    </div>
                    <div className='mb-2 mt-2'>
                        <label htmlFor='number'>Phone Number</label>
                        <div>
                            <input className="form-control" type='text' name='phone'
                                id='number' placeholder='+88023456789' required />
                        </div>
                    </div>
                    <div className='mb-2 mt-2'>
                        <label htmlFor='location'>Location</label>
                        <div>
                            <input className="form-control" type='text' name='location'
                                id='location' placeholder='Dhaka,Bangladesh' required />
                        </div>
                    </div>
                    <div className='mb-2 mt-2'>
                        <label htmlFor='education'>Education</label>
                        <div>
                            <input className="form-control" type='text' name='education'
                                id='education' placeholder='Add educational history' required />
                        </div>
                    </div>
                    <div className='mb-2 mt-2'>
                        <label htmlFor='bio'>Bio</label>
                        <div>
                            <input className="form-control" type='text' name='bio'
                                id='bio' placeholder='Add bio' required />
                        </div>
                    </div>
                    <div className='mb-2 mt-2'>
                        <label htmlFor='description'>Description</label>
                        <div>
                            <input className="form-control" type='text' name='description'
                                id='description' placeholder='Add description' required />
                        </div>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='link'>Github Link</label>
                        <div>
                            <input className="form-control"
                                type='star'
                                name='github'
                                id='link' placeholder='Add github profile link' required
                            />
                        </div>
                    </div>
                    <button type='submit' className='btn btn-dark d-block w-100'>
                       Edit Profile
                    </button>

                </form>
                <div className='row justify-content-between align-items-center mt-2 px-3'>
                    <hr className="col-5" />
                    <p className="col-1">0</p>
                    <hr className="col-5" />
                </div>
            </div>
        </div>
    );
};

export default EditProfile;