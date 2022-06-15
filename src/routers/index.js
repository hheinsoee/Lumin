import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link
} from "react-router-dom";
import MyNav from '../components/nav';
import { lang } from '../functions';
import useAuth from '../hooks/auth';
import Customer from '../pages/customer';
import Dashboard from '../pages/dashboard';
import Item from '../pages/item';
import Login from '../pages/login';
import Receive from '../pages/receive';
import Sale from '../pages/sale';

function MyRouter(props) {
    var auth = useAuth();
    console.log(auth);
    return (
        <Router>
            <div className='min_fullHeight'>
                <Routes>
                    {
                        auth.user
                            ? (
                                <>
                                    <Route path='/items' element={<Item />} />
                                    <Route path='/customers' element={<Customer />} />
                                    <Route path='/sales' element={<Sale />} />
                                    <Route path='/Receives' element={<Receive />} />
                                    <Route path='/' element={<Dashboard />} />
                                    ok
                                </>
                            )
                            :
                            <Route path='/login' element={<Login />} />
                    }
                    <Route path='/*' element={<Navigate to={auth.user? "/" : "/login"}/> } />
                </Routes>
            </div>
            <div style={{ position: "sticky", bottom: 0, height: '48px' }}>
                <MyNav />
            </div>
        </Router>
    );
}

export default MyRouter;