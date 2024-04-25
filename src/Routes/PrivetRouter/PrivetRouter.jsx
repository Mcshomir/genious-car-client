import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';


const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <h1 className='text-5xl'>Loading...</h1>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/signup' state={{ from: location }} replace></Navigate>
};

export default PrivetRouter;