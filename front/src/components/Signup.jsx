import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FileBase64 from "react-file-base64";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme();

export default function SignUp({mode}) {
  const [file, setFile] = useState();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      event.target.Username.value === "" ||
      event.target.password.value === ""
    ) {
      toast.error("Please fill all the fields");
    } else {
      const payload = {
        username: event.target.Username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        password: event.target.password.value,
        image: file,
      };

      axios
        .post("https://petshop-project.herokuapp.com/register", payload)
        .then((res) => {
          console.log(res.data.user);
          toast.success("Registered Successfully");
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  //if field is empty disable buttons

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ paddingBottom: "46px" }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Box sx={{ width: "23%", paddingTop: "10px", overflow: "hidden" }}>
            <label htmlFor="upload-photo">
              <FileBase64
                id="upload-photo"
                name="upload-photo"
                type="file"
                multiple={false}
                onDone={(file) => {
                  console.log(JSON.stringify(file.base64));
                  setFile(file.base64);
                }}
              />
            </label>
          </Box>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  name="Username"
                  required={true}
                  fullWidth
                  id="Username"
                  label="Username"
                  autoFocus
                  InputLabelProps={
                    mode === "light"
                      ? null
                      : { style: { color: "white" } }
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required={true}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
                  InputLabelProps={
                    mode === "light"
                      ? null
                      : { style: { color: "white" } }
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required={true}
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="off"
                  InputLabelProps={
                    mode === "light"
                      ? null
                      : { style: { color: "white" } }
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required={true}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  InputLabelProps={
                    mode === "light"
                      ? null
                      : { style: { color: "white" } }
                  }
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Grid
              container
              justifyContent="flex-end"
              sx={{ cursor: "pointer" }}
            >
              <Grid item>
                <Link onClick={() => navigate("/login")} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
}
