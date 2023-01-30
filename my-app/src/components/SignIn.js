import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignIn(props) {

  const [email, setEmail] = React.useState("")
  const [paswrd, setPaswrd] = React.useState("")

  const [open, setOpen] = React.useState(false);

  const [alertType, setAlertType] = React.useState("error")
  const [alertText, setAlertText] = React.useState("Incorrect Credentials")

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const adminDetails = {
      fname: "firstName",
      lname: "lastName",
      uname: "uname",
      email: "email",
      age: "age",
      contact: "contact",
      password: "password"
    }

    if (data.get('email') === "admin" && data.get('password') === "admin") {
      setAlertType("success")
      setAlertText("Successfully logged in")
     
      window.localStorage.setItem("login-status", "true")
      window.localStorage.setItem("user-details", JSON.stringify(adminDetails))

      navigate("/profile")
    }
    else {
      setEmail("")
      setPaswrd("")
    }
    setOpen(true)
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={(event) => { setEmail(event.target.value) }}
        value={email}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={(event) => { setPaswrd(event.target.value) }}
        value={paswrd}
      />
      <Button type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={!((email) && (paswrd))}
      >
        Submit
      </Button>
      <Snackbar open={open} anchorOrigin={{ vertical: "top", horizontal: "center" }} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertType} sx={{ width: '100%' }}>
          <strong>{alertText}</strong>
        </Alert>
      </Snackbar>
    </Box>
  );
}
