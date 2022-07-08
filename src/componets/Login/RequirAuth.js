import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
  
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <p>loading...</p>
}

    if (!user) {
return <Navigate to="/login"  />;
    }
    return children;
};

export default RequireAuth;