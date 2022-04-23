import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const theme = createTheme();

export default function UserPet() {
  const handleSubmitShop = (event) => {
    event.preventDefault();
    const payload = {
      name: event.target.name.value,
      pettype: event.target.pettype.value,
      startdate: event.target.startdate.value,
      enddate: event.target.enddate.value,
      userid: localStorage.getItem("user_id"),
      petshopdetail: localStorage.getItem("pets_id"),
    };
    console.log(payload);
    axios
      .post("https://petshop-project.herokuapp.com/userpet", payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              User Pet Details
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmitShop}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="off"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Pet Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="off"
                    name="pettype"
                    required
                    fullWidth
                    id="pettype"
                    label="Pet Type"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12}>
                  <Box
                    style={{
                      margin: "auto",
                      display: "block",
                      width: "fit-content",
                    }}
                  >
                    <TextField
                      id="startdate"
                      label="Choose Startday"
                      type="date"
                      defaultValue="2021-04-23"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box
                    style={{
                      margin: "auto",
                      display: "block",
                      width: "fit-content",
                    }}
                  >
                    <TextField
                      id="enddate"
                      label="Choose Endday"
                      type="date"
                      defaultValue="2021-04-23"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register Pet Shop
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
