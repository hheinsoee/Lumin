import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Box, Button, FormControl, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link
} from "react-router-dom";
import useLocalStorage from '../hooks/localStorage';
import useAuth from '../hooks/auth';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Login(props) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);

    const { loading, signin } = useAuth();

    const myusername = event => {
        setUsername(event.target.value);
    };
    const mypassword = event => {
        setPassword(event.target.value);
    };
    function submit() {
        signin(username, password);
    }

    function handleClickShowPassword() {
        setShowPassword(!showPassword)
    }
    return (

        <Box sx={{
            maxWidth: 400,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
        }}>
            <TextField
                label="Username"
                type="email"
                value={username}
                onChange={myusername}
            />
            <FormControl>
                <TextField
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={mypassword}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowPassword}
                                //   onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </FormControl>
            <Button onClick={submit}
                variant="outlined">Sign In</Button>
            <Typography
                endDecorator={<Link href="/sign-up">Sign up</Link>}
                fontSize="sm"
                sx={{ alignSelf: 'center' }}
            >
                Don't have an account?
            </Typography>
            <div>
                {
                    loading && 'sending...'
                }
            </div>
        </Box>
    );
}

export default Login;