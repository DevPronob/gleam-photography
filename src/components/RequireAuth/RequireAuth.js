import React from 'react';
import auth from '../../../src/Auth/firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate,useLocation } from "react-router-dom"
import Loading from '../Others/Loading/Loading';
const RequireAuth = ({children}) => {
    const location =useLocation();
    const [user,loading] = useAuthState(auth);
    if(loading){
        return <Loading></Loading>
    }
    
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;