import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import useAuth from '../hooks/auth';
import useLocalDB from '../hooks/localDB';

function Dashboard(props) {
    const [loading, setLoading] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(false);
    const { towns, setTowns, insertTown, dropTable, createTable } = useLocalDB();

    const [newTown, setNewTown] = useState('');

    const { token, signout } = useAuth();



    function loadTown() {//local storage မှ or http
        dropTable();
        createTable();
        setLoading(true);
        let headersList = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
        let reqOptions = {
            url: process.env.REACT_APP_API_URL + "town",
            method: "GET",
            headers: headersList,
            // data: bodyContent,
        }
        axios.request(reqOptions)
            .then(function (response) {

                setLoading(false);
                setTowns(response.data);
                insertTown(response.data);
            })
            .catch(function (error) {
                setLoading(false);
                error.response.status == 401 && signout();
            })

    };

    function post() {
        setSending(true);

        let headersList = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }

        let bodyContent = JSON.stringify({
            "name": `${newTown}`
        });

        let reqOptions = {
            url: process.env.REACT_APP_API_URL + "town",
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }
        axios.request(reqOptions)
            .then(function (response) {
                setTowns([...towns, response.data]);//check validation
                setSending(false);
                insertTown(response.data);
                setNewTown('');
            })
            .catch(function (error) {
                console.log(error);
                setSending(false);
            })

    }
    const handleTextInputChange = event => {
        setNewTown(event.target.value);
    };

    return (
        <React.Fragment>
            {
                loading ? 'loading...'
                    :
                    towns &&
                    towns.map(function (d, i) {
                        return <li key={i}>{d.name}</li>
                    })
            }
            {
                sending ? 'Sending...'
                    :
                    <div>
                        <TextField
                            label="Text Input"
                            value={newTown}
                            onChange={handleTextInputChange}
                        />
                        <Button onClick={post}>Create</Button>
                    </div>
            }
            <hr />
            <Button onClick={loadTown}>load Online</Button>


        </React.Fragment>
    );
}

export default Dashboard;