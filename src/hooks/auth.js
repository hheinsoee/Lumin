import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

function useAuth(props) {
    const [user, setUser] = useState(localStorage.getItem('user') || false);
    const [token, setToken] = useState(localStorage.getItem('token') || false);

    return {
        user,
        token,
        // signup,
        // signout,
        // sendPasswordResetEmail,
        // confirmPasswordReset,
    };
}
export default useAuth;



const authContext = createContext();
export function ProvideAuth({ children }) {
    const auth = useAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}