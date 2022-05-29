import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import { auth } from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth)
    const {admin,adminLoading} =useAdmin(user)
    if (loading||adminLoading){
        return <h1>loading</h1>
    }
    console.log(admin);
    return (
        <div className='my-5 py-5'>
            <div className="row ms-5">
                <div className="col-lg-3">
                    <ul className='text-dark p-5 list-container'>
                        <li><Link to="/dashboard">My Profile</Link></li>
                        <li><Link to="/dashboard/profile">Edit Profile</Link></li>
                        {
                            admin ? <>
                            <li><Link to="/dashboard/add-product">Add Product</Link></li>
                        <li><Link to="/dashboard/edit-product">Edit Product</Link></li>
                        <li><Link to="/dashboard/manage-order">Manage Order</Link></li>
                        <li><Link to="/dashboard/manage-user">Manage User</Link></li>
                            </> : <>
                            
                            <li><Link to="/dashboard/order">My Order</Link></li>
                        <li><Link to="/dashboard/review">Review</Link></li>                           
                            
                            </>
                        }                      

                        
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