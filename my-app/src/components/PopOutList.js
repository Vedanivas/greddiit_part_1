import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import Lists from './Lists';

// const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, open, title } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={"xs"} scroll={"paper"}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers={true}>
      <Lists />
      </DialogContent>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  // data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default function PopOut(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <Button variant="" onClick={handleClickOpen}>
        <strong>{props.title + " 4"}</strong>
      </Button>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        title={props.title}
      />
    </div>
  );
}