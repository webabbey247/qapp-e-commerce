import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                const loggedIn = localStorage.getItem('authToken');
                !loggedIn && toast.error("Kindly login to continue");
                return loggedIn ? (
                    <Component {...props} />
                ) : (
                    <Navigate to="/" /> 
                )
            }}
        />
        
    )
}

export default PrivateRoute