import React from "react";
import { styled } from '@mui/material/styles'
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container } from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import logo1 from '../../componentes/imagenes/logo1.png'
import {Link} from 'react-router-dom'


const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get("email"),
    password: data.get("password"),
  });
};
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFAFA",
  [theme.breakpoints.down('sm')]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
   
  },
}))

const Registro = () => {
  return (
    <>
      <StyledBox  sx={{ display:"flex", justifycontent:"flex-start", margin: '8rem'}}>
        <Box sx={{ marginRight: "auto" }}>
          <Link to="/">
            <img src={logo1} alt="logo" sx={{ width: 100, height: 100 }} />
          </Link>
        </Box>
      
      <Container component="main" maxWidth="xs"  sx={{marginRight:"auto"}}>
        <CssBaseline />
        <Box
             sx={{
             marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1 }} style={{ color: "#4b7f55" }}>
            <AppRegistrationIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Register 
           
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              style={{ color: "#4b7f55" }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              color="success"
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
              color="success"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="repeatpassword"
              label="Repeat Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="success"
            />

            <FormControlLabel
              control={
                <Checkbox value="remember" style={{ color: "#4b7f55" }} />
              }
              label="Remember me"
            />
            <Button
              style={{ backgroundColor: "#4b7f55" }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs sx={{ display: "flex", alignItems: "center" }}>
                <Link to='/login' href="#" variant="body2" style={{ color: "#4b7f55" }}>
                  Haz clic aqui si ya te has registrado
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
              </Container>
              </StyledBox>
    </>
  );
};
export default Registro;
