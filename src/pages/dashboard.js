import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import useAuth from '../hooks/auth';

function Dashboard(props) {
    const [loading, setLoading] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(false);
    const [towns, setTowns] = useState([]);

    const [newTown, setNewTown] = useState(null);

    const auth = useAuth();
    useEffect(() => {
        setLoading(true);

        let headersList = {
            "Accept": "application/json",
            "Authorization": "Bearer " + auth.token
        }

        // let bodyContent = JSON.stringify({

        // });

        let reqOptions = {
            url: process.env.REACT_APP_API_URL + "town",
            method: "GET",
            headers: headersList,
            // data: bodyContent,
        }
        axios.request(reqOptions)
            .then(function (response) {
                setTowns(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            })

    }, []);

    function post() {
        setSending(true);

        let headersList = {
            "Accept": "application/json",
            "Authorization": "Bearer " + auth.token
        }

        let bodyContent = JSON.stringify({
            "name": newTown
        });

        let reqOptions = {
            url: process.env.REACT_APP_API_URL + "town",
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }
        axios.request(reqOptions)
            .then(function (response) {
                setTowns([...towns, response.data]);
                setSending(false);
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
            <h1>Sarun</h1>
            <div>Date range</div>
            <div>graph</div>
            <div>Summery</div>

        </React.Fragment>
    );
}

export default Dashboard;