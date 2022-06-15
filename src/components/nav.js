import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { lang } from '../functions';

export default function MyNav() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    
    const links = [
        { label: "Dashboard", link: "/" },
        { label: "Item", link: "/items" },
        { label: "Customer", link: "/customers" },
        { label: "Sale", link: "/sales" },
        { label: "Receive", link: "/receives" },
    ]
    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(links[newValue].link)
    };
    return (
        <Box sx={{ width: '100%' }} bgcolor="#dfdfdf">
            <Tabs
                onChange={handleChange}
                value={value}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="Tabs where selection follows focus"
                selectionFollowsFocus
            >
                {
                    links.map((l, i) => {
                        return <Tab key={i} label={lang(l.label)} />
                    })
                }
            </Tabs>
        </Box>
    );
}
