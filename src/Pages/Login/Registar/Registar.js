import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Sociallogin from '../Sociallogin/Sociallogin';
import { async } from '@firebase/util';

const Registar = () => {

    //cheack box
    const [agree, setAgree] = useState(false);

    const [createUserWithEmailAndPassword, user] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    //update profile
    const [updateProfile, updating] = useUpdateProfile(auth);


    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home')

    }

    const navigateLogin = () => {
        navigate('/login')
    }

    return (
        <div className='register-form mt-2'>
            <h2 className='mb-4' style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />

                <input className='mb-3 ' onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? "ps-2 text-primary" : " ps-2 text-danger"} htmlFor="terms">Accept teams and conditions</label> <br />

                <input disabled={!agree} className='tttt' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <Sociallogin></Sociallogin>
        </div>
    );
};

export default Registar;