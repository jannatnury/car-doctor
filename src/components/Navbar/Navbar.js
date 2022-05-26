import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../../assets/images/logo.png';
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
            <nav className=" navbar navbar-expand-lg navbar-dark pb-2 mb-4 bg-dark">
                <div className="-fluid px-5 ">
                    {/* Brand logo */}
                    <Link className="navbar-brand " to="/"><img src={brandLogo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* nav links */}
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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