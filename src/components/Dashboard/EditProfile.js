import React from 'react';

const EditProfile = () => {
    return (
        <div className='container p-5 pt-0'>
            <div className='col-md-6 mx-auto p-5 shadow rounded-10 bg-light'>
                <h2 className="text-center">Add Your Reviwe</h2>
                <form>
                    <div className='mb-2 mt-2'>
                        <label htmlFor='name'>Name</label>
                        <div>
                            <input className="form-control" type='text' name='name'
                                id='name' placeholder='Jannat Nury' required />
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
                        <label htmlFor='review'>Review</label>
                        <div>
                            <input className="form-control" type='text' name='review'
                                id='review' placeholder='Write a review' required />
                        </div>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='star'>Stars</label>
                        <div>
                            <input className="form-control"
                                type='star'
                                name='star'
                                id='star' placeholder='Give star ratings' required
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