import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {

    //email vrerify
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);


    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    //email veri
    if (!user.emailVerified) {
        return <div>
            <h5>Email verify please!</h5>
            <button onClick={async () => { await sendEmailVerification(); toast('Sent email'); }}>Verify email</button>
            <ToastContainer />
        </div>

    }

    return children;
};

export default RequireAuth;