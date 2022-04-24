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

export default function CreatePetShop() {
  const handleSubmitShop = (event) => {
    event.preventDefault();
    const payload = {
      name: event.target.name.value,
      city: event.target.city.value,
      address: event.target.address.value,
      capacity: event.target.capacity.value,
      costperday: event.target.costperday.value,
      verified: event.target.verified.value,
      rating: event.target.rating.value,
      image: event.target.image.value,
      petshopdetails: JSON.parse(localStorage.getItem("petdeatilId")),
    };
    console.log(payload);
    axios
      .post("https://petshop-project.herokuapp.com/createpetshop", payload)
      .then((res) => {
        console.log(res);
        alert("Flat created successfully");
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
              Pet Shop Register
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmitShop}
              sx={{ mt: 3 }}
              width={900}
            >
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <TextField
                    autoComplete="off"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Shop Name"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                    autoComplete="off"
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="address"
                    label="Shop Address"
                    name="address"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="capacity"
                    label="Pets Capacity"
                    name="capacity"
                    autoComplete="off"
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="costperday"
                    label="Cost Per Day"
                    name="costperday"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="verified"
                    label="Verified"
                    name="verified"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="rating"
                    label="Ratings"
                    name="rating"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="image"
                    label="Image"
                    name="image"
                    autoComplete="off"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register Shop
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
