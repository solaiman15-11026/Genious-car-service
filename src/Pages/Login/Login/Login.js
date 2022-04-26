import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {

    const navigate = useNavigate();

    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('')
    const location = useLocation();


    let from = location.state?.from?.pathname || "/";

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (user) {
        navigate('/home')
    }

    return (
        <div className='mx-auto w-50 mt-4' >
            <h3 className='text-center'>LOGIN</h3>
            <Form onSubmit={handleSubmit} className='mb-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <p className='mt-3'>new user here ? <span className='text-primary'><Link to={'/registar'}>create a account</Link> </span> </p>

            </Form>

        </div>
    );
};

export default Login;