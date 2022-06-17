import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { lang } from '../functions';
import { Button } from '@mui/material';
import useAuth from '../hooks/auth';

export default function MyNav() {
    let path = useLocation().pathname;
    const [value, setValue] = React.useState(path);
    const navigate = useNavigate();
    const { signout } = useAuth();
    const links = [
        { label: "Dashboard", link: "/" },
        { label: "Item", link: "/items" },
        { label: "Customer", link: "/customers" },
        { label: "Sale", link: "/sales" },
        { label: "Receive", link: "/receives" },
        { label: "Logout", link: "/logout" }
    ]

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        navigate(newValue);
    };

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
        >
            {
                links.map((l, i) => {
                    return <Tab key={i} value={l.link} label={lang(l.label)} />
                })
            }
        </Tabs>

    );
}
