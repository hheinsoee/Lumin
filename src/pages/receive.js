import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { lang } from '../functions';
import { Typography } from '@mui/material';

const columns = [
    { field: 'date', headerName: lang("Date"), width: 100, type: 'date', },
    { field: 'name', headerName: lang("Name"), width: 130 },
    {
        field: 'amount',
        headerName: lang("Amount"),
        type: 'number',
        width: 90,
    },
    {
        field: 'note',
        headerName: lang("Note"),
        sortable: false,
        width: 300
    }
];

const rows = [
    { id: 1, date: '22-02-2022', name: 'Snow', amount: 35000, note: "ok" },
    { id: 2, date: '23-02-2022', name: 'Snow', amount: 34000, note: "ok" },
    { id: 3, date: '23-02-2022', name: 'Snow', amount: 34000, note: "ok" },
    { id: 4, date: '23-02-2022', name: 'Snow', amount: 34000, note: "ok" },
    { id: 5, date: '23-02-2022', name: 'Snow', amount: 34000, note: "ok" },
    { id: 6, date: '23-02-2022', name: 'Snow', amount: 34000, note: "ok" },
    { id: 7, date: '23-02-2022', name: 'Snow', amount: 34000, note: "ok" },
    { id: 8, date: '23-02-2022', name: 'Snow', amount: 34000, note: "ok" },
    { id: 9, date: '23-02-2022', name: 'Snow', amount: 34000, note: "ok" },
    { id: 10, date: '23-02-2022', name: 'Snow', amount: 34000, note: "ok" },
    { id: 11, date: '23-02-2022', name: 'Snow', amount: 34000, note: "ok" },
    { id: 12, date: '23-02-2022', name: 'Snow', amount: 34000, note: "ok" },
    { id: 13, date: '23-02-2022', name: 'Snow', amount: 34000, note: "ok" },
    { id: 14, date: '23-02-2022', name: 'Snow', amount: 34000, note: "ok" }
];

export default function Receive() {
    return (
        <React.Fragment>
            <Typography variant="h5" component="h1" className='p'>
                {lang("Sale")}
            </Typography>
            <div style={{ width: '100%' }}>
                <DataGrid
                    autoHeight
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                // checkboxSelection
                />
            </div>
        </React.Fragment>
    );
}
