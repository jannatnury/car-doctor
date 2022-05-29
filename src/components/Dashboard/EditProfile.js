import React from 'react';

const EditProfile = () => {
    return (
        <div className='container p-5 pt-0'>
            <div className='col-md-6 mx-auto p-5 shadow rounded-10 bg-light'>
                <h2 className="text-center">Edit Your Profile</h2>
                <form>
                    <div className='mb-2 mt-2'>
                        <label htmlFor='name'>Full Name</label>
                        <div>
                            <input className="form-control" type='text' name='name'
                                id='name' placeholder='Jannat Nury' required />
                        </div>
                    </div>
                    <div className='mb-2 mt-2'>
                        <label htmlFor='email'>Email Address</label>
                        <div>
                            <input className="form-control" type='text' name='email'
                                id='email' placeholder='jannatnury253@gmail.com' required />
                        </div>
                    </div>
                    <div className='mb-2 mt-2'>
                        <label htmlFor='number'>Phone Number</label>
                        <div>
                            <input className="form-control" type='text' name='number'
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
                    <div className='mb-2'>
                        <label htmlFor='link'>Github Link</label>
                        <div>
                            <input className="form-control"
                                type='star'
                                name='link'
                                id='link' placeholder='Add github profile link' required
                            />
                        </div>
                    </div>
                    <button type='submit' className='btn btn-dark d-block w-100'>
                        Add Review
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