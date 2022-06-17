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
import Logout from '../pages/logout';
import Receive from '../pages/receive';
import Sale from '../pages/sale';

function MyRouter(props) {
    var {user,signout} = useAuth();
    return (
        <Router>

            {
                user
                    ?
                    <>
                        <div className='min_fullHeight'>
                            <Routes>
                                <Route path='/items' element={<Item />} />
                                <Route path='/customers' element={<Customer />} />
                                <Route path='/sales' element={<Sale />} />
                                <Route path='/Receives' element={<Receive />} />
                                <Route path='/sales/t' element={<Dashboard />} />
                                <Route path='/' element={<Dashboard />} />
                                <Route path='/login' element={<Navigate to="/" />} />
                                <Route path='/logout'element={<Logout />} />
                            </Routes>
                        </div>
                        <div style={{ position: "sticky", bottom: 0, height: '48px' }}>
                            <MyNav />
                        </div>
                    </>
                    :
                    <Routes>
                        <Route path='/*' element={<Navigate to={user ? "/" : "/login"} />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
            }

        </Router>
    );
}

export default MyRouter;