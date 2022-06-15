import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { lang } from '../../functions';
import { Input, TextField } from '@mui/material';

export default function NewCustomer() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Button startIcon={<PersonAddIcon />} onClick={handleClickOpen}>
                {lang("New Customer")}
            </Button>
            <Dialog
                fullWidth
                open={open}
                onClose={handleClose}
                scroll="paper"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">{lang("New Customer")}</DialogTitle>
                <DialogContent sx={{ '& > :not(style)': { my: 1 } }}>
                    <TextField label={lang("Name")}
                        variant="standard"
                        // value=""
                        fullWidth 
                        //onChange=""
                        name={lang("Name")} />
                    <TextField label={lang("Phone")}
                        variant="standard"
                        // value=""
                        fullWidth 
                        //onChange=""
                        name={lang("Phone")} />
                    <TextField label={lang("Address")}
                        variant="standard"
                        // value=""
                        fullWidth 
                        //onChange=""
                        name={lang("Address")} />
                    <TextField label={lang("Town")}
                        variant="standard"
                        // value=""
                        fullWidth 
                        //onChange=""
                        name={lang("Town")} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
