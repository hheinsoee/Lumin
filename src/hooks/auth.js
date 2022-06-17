import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

function useAuth(props) {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(localStorage.getItem('user') || false);
    const [token, setToken] = useState(localStorage.getItem('token') || false);

    function signout() {
        localStorage.clear();
        setToken(false);
        setUser(false);
        window.location.reload();
    }
    function signin(username, password) {

        let headersList = {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
        let bodyContent = JSON.stringify({
            "email": username,
            "password": password
        });

        let reqOptions = {
            url: process.env.REACT_APP_API_URL + 'login',
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }
        setLoading(true);
        axios.request(reqOptions)
            .then(function (response) {
                setLoading(false);
                setToken(response.data);
                localStorage.setItem("token", response.data);
                userinfo(response.data);                
            })
            .catch(function (error) {
                setLoading(false);
                console.log(error);
            })

        //user info
        function userinfo(token) {
            let headersList = {
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }

            let reqOptions = {
                url: process.env.REACT_APP_API_URL + "me",
                method: "GET",
                headers: headersList,
            }
            axios.request(reqOptions)
                .then(function (response) {
                    setUser(response.data)
                    localStorage.setItem("user", JSON.stringify(response.data));
                    window.location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                })
        };
    }
    return {
        loading,
        user,
        token,
        // signup,
        signin,
        signout,
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