import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Button, TextField } from '@mui/material';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link
} from "react-router-dom";
import useLocalStorage from '../hooks/localStorage';

function Login(props) {

    const [token, setToken] = useState(localStorage.getItem('token') || false);

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [sending, setSending] = useState(false);


    function login() {
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
        setSending(true);
        axios.request(reqOptions)
            .then(function (response) {
                setSending(false);
                setToken(response.data);
                localStorage.setItem("token", response.data);
            })
            .catch(function (error) {
                setSending(false);
                console.log(error);
            })
    }

    useEffect(() => {
        if (token) {
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
                    localStorage.setItem("user", JSON.stringify(response.data));
                    window.location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                })

        }
    }, [token]);

    const myusername = event => {
        setUsername(event.target.value);
    };
    const mypassword = event => {
        setPassword(event.target.value);
    };
    return (
        <div>
            <TextField
                label="Text Input"
                value={username}
                onChange={myusername}
            />
            <TextField
                label="Text Input"
                value={password}
                onChange={mypassword}
            />
            <Button onClick={login}>Login</Button>
            <div>
                {
                    sending && 'sending...'
                }
            </div>
        </div>
    );
}

export default Login;