import React from "react";
import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    // const user = JSON.parse(localStorage.getItem('authenticate'));
    const user = useSelector((state)=>state.user.authenticate)
    console.log("user in Protected: ", user);

    if (!user) {
        console.log("user not found, navigate to login again")
        // alert("login again")
       return  <Navigate to="/" /> 
    }
    else return children;
};

export default ProtectedRoute;