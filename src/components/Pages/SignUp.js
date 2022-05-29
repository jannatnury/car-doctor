import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import googleIcon from '../../assets/icons/google.svg';
import { auth } from '../../firebase.init';

const SignUp = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });


    const [createUserWithEmailAndPassword, user, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }

    };
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    const handleSignup = (e) => {
        e.preventDefault();
        console.log(userInfo);
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    };

    const handleGoogle = () => {
        signInWithGoogle();
    }

    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast("Invalid Email.");
                    break;
                case "auth/invalid-password":
                    toast("Wrong Password.");
                    break;
                default:
                    toast("Something Went Wrong");
            }
        }
    }, [hookError]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true });
        }
    }, [user, googleUser]);


    return (
        <div className='container p-5 pt-0'>
            <div className='col-md-6 mx-auto p-5 shadow m-5 rounded-10 bg-light'>
                <h2 className="text-center">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className='mb-2 mt-2'>
                        <label htmlFor='email'>Email</label>
                        <div className=''>
                            <input onBlur={handleEmailChange} className="form-control" type='text' name='email'
                                id='email' required />
                        </div>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Password</label>
                        <div className=''>
                            <input onBlur={handlePasswordChange}  className="form-control"
                                type='password'
                                name='password'
                                id='password' required
                            />
                        </div>
                    </div>
                    <button type='submit' className='btn btn-dark d-block w-100'>
                        Sign Up
                    </button>
                </form>
                <p className='mt-2'>
                    Have an account?
                    <Link className="ps-3" to="/sign-in"><span className='text-red-400'>Sign In </span></Link>
                </p>
                <div className='row justify-content-between align-items-center px-3'>
                    <hr className="col-5" />
                    <p className="col-1">or</p>
                    <hr className="col-5" />
                </div>
                <div className=''>
                    <button onClick={handleGoogle} className='px-5 mb-3 btn btn-outline-dark d-flex justify-content-center align-items-center w-100'
                    >
                        <img className="d-block" src={googleIcon} alt='icon' />
                        <p className="mt-3 fs-5 ms-3"> Google Sign In </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;