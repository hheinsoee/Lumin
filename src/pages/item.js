import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { lang } from '../functions';
import { Typography } from '@mui/material';

const columns = [
    { field: 'item_name', headerName: lang("Item Name"), width: 160 },
    {
        field: 'note',
        headerName: lang("Note"),
        sortable: false,
        width: 300
    }
];

const rows = [
    { id: 1, item_name: 'ပေါ်ဆန်းမွှေး', note: "ok" },
    { id: 2, item_name: 'ပေါ်ဆန်းမွှေး', note: "ok" },
    { id: 3, item_name: 'ပေါ်ဆန်းမွှေး', note: "ok" },
    { id: 4, item_name: 'ပေါ်ဆန်းမွှေး', note: "ok" },
    { id: 5, item_name: 'ပေါ်ဆန်းမွှေး', note: "ok" },
    { id: 6, item_name: 'ပေါ်ဆန်းမွှေး', note: "ok" },
    { id: 7, item_name: 'ပေါ်ဆန်းမွှေး', note: "ok" },
    { id: 8, item_name: 'ပေါ်ဆန်းမွှေး', note: "ok" },
    { id: 9, item_name: 'ပေါ်ဆန်းမွှေး', note: "ok" },
    { id: 10, item_name: 'ပေါ်ဆန်းမွှေး', note: "ok" },
    { id: 11, item_name: 'ပေါ်ဆန်းမွှေး', note: "ok" },
    { id: 12, item_name: 'ပေါ်ဆန်းမွှေး', note: "ok" },
    { id: 13, item_name: 'ပေါ်ဆန်းမွှေး', note: "ok" },
    { id: 14, item_name: 'ပေါ်ဆန်းမွှေး', note: "ok" }
];

export default function Item() {
    return (
        <React.Fragment>
            <Typography variant="h5" component="h1" className='p'>
                {lang("Item")}
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
