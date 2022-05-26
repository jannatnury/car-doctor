import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../../assets/icons/iconc.ico';
import { auth } from '../../firebase.init';

const Navbar = () => {

    const [user, setUser] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // console.log(user);
            }
            else {
                setUser({});
            }
        });
    }, []);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <div>
            {/* navbar */}
            <nav className=" navbar navbar-expand-lg shadow-sm py-3 navbar-light pb-2 mb-4 ">
                <div className="-fluid px-5 ">
                    {/* Brand logo */}
                    <div className='flex justify-center align-center'>
                    <Link className="navbar-brand me-0 mb-3" to="/"><img src={brandLogo} alt="" /></Link>
                    <Link to="/"><p className='logo fw-bolder text-3xl mt-2.5  ms-0'>Car Doctor</p></Link>
                    
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* nav links */}
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pb-2.5">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/courses">Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/blogs'>Blogs</Link>
                            </li>
                            {
                                user?.uid ? (
                                    <li className="nav-item">
                                        <Link onClick={handleSignOut} className="nav-link fw-bolder" to="/">Sign Out</Link>
                                    </li>
                                ) : (
                                    <li className="nav-item">
                                        <Link className="nav-link fw-bolder" to="/sign-in">Sign In</Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;