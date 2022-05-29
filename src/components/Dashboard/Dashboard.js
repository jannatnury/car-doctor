import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='my-5 py-5'>
            <div className="row ms-5">
                <div className="col-lg-3">
                    <ul className='text-dark p-5 list-container'>
                        <li><Link to="/dashboard">My Profile</Link></li>
                        <li><Link to="/dashboard/profile">Edit Profile</Link></li>
                        <li><Link to="/dashboard/order">My Order</Link></li>
                        <li><Link to="/dashboard/review">Review</Link></li>
                    </ul>
                </div>
                <div className="col-lg-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;