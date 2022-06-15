import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { lang } from '../functions';
import { Typography, Box } from '@mui/material';
import NewCustomer from '../components/forms/newcustomer';
import CustomerDetail from './customer_detail';
const columns = [
  { field: 'id', headerName: lang("No"), width: 40 },
  { field: 'name', headerName: lang("Name"), width: 140 },
  {
    field: 'phone',
    headerName: lang("Phone"),
    width: 140,
  },
  {
    field: 'address',
    headerName: lang("Address"),
    width: 160,
  },
  {
    field: 'town',
    headerName: lang("Town"),
    width: 100,
  },
  {
    field: 'note',
    headerName: lang("Note"),
    sortable: false,
    width: 300
  }
];

const rows = [
  { id: 1, name: 'Hein Soe', phone: '09987875764', address: 'လိပ်စာ', town: 'sittwe', note: 'ok' },
  { id: 2, name: 'Snow', phone: '09987875764', address: 'လိပ်စာ', town: 'sittwe', note: 'ok' },
  { id: 3, name: 'Snow', phone: '09987875764', address: 'လိပ်စာ', town: 'sittwe', note: 'ok' },
  { id: 4, name: 'Snow', phone: '09987875764', address: 'လိပ်စာ', town: 'sittwe', note: 'ok' },
  { id: 5, name: 'Snow', phone: '09987875764', address: 'လိပ်စာ', town: 'sittwe', note: 'ok' },
  { id: 6, name: 'Snow', phone: '09987875764', address: 'လိပ်စာ', town: 'sittwe', note: 'ok' },
  { id: 7, name: 'Snow', phone: '09987875764', address: 'လိပ်စာ', town: 'sittwe', note: 'ok' },
  { id: 8, name: 'Snow', phone: '09987875764', address: 'လိပ်စာ', town: 'sittwe', note: 'ok' },
  { id: 9, name: 'Snow', phone: '09987875764', address: 'လိပ်စာ', town: 'sittwe', note: 'ok' },
  { id: 10, name: 'Snow', phone: '09987875764', address: 'လိပ်စာ', town: 'sittwe', note: 'ok' },
  { id: 11, name: 'Snow', phone: '09987875764', address: 'လိပ်စာ', town: 'sittwe', note: 'ok' },
  { id: 12, name: 'Snow', phone: '09987875764', address: 'လိပ်စာ', town: 'sittwe', note: 'ok' },
  { id: 13, name: 'Snow', phone: '09987875764', address: 'လိပ်စာ', town: 'sittwe', note: 'ok' },
  { id: 14, name: 'Snow', phone: '09987875764', address: 'လိပ်စာ', town: 'sittwe', note: 'ok' }
];

export default function Receive() {

  const [pageSize, setPageSize] = React.useState(10);
  const [finalClickInfo, setFinalClickInfo] = React.useState(null);
  const [popup, setPopup] = React.useState(false);

  const handleOnCellClick = (params) => {
    setFinalClickInfo(params.row);
    setPopup(true)
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" component="h1" className='p'>
          {lang("Customer")}
        </Typography>
        <NewCustomer />
      </Box>

      <CustomerDetail data={finalClickInfo} open={popup} />

      <div style={{ width: '100%' }}>
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[10, 20, 30]}
          pagination
          // checkboxSelection

          onCellClick={handleOnCellClick}
        />
      </div>
    </React.Fragment>
  );
}
