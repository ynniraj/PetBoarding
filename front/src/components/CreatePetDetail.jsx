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
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function CreatePetDetail() {
  const navigate = useNavigate();

  const handleSubmitShopDetails = (event) => {
    event.preventDefault();
    const payload = {
      shopname: event.target.shopname.value,
      petwatch: event.target.petwatch.value,
      pettypes: event.target.pettypes.value,
      petsize: event.target.petsize.value,
      walks: event.target.walks.value,
      hometype: event.target.hometype.value,
      outdoorsize: event.target.outdoorsize.value,
      emergencytransport: event.target.emergencytransport.value,
    };
    axios
      .post("https://petshop-project.herokuapp.com/createpetdetail", payload)
      .then((res) => {
        console.log(res);
        localStorage.setItem(
          "petdeatilId",
          JSON.stringify(res.data.petshop._id)
        );
        alert("pet Details created successfully");
        navigate("/createpetshop");
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
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register Pet Shop Details
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmitShopDetails}
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
                    name="shopname"
                    required
                    fullWidth
                    id="shopname"
                    label="Shop Name"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="petwatch"
                    label="Pet Watch"
                    name="petwatch"
                    autoComplete="off"
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="pettypes"
                    label="Pet Types"
                    name="pettypes"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="petsize"
                    label="Pet Size"
                    name="capacity"
                    autoComplete="off"
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="walks"
                    label="Walks Per Day"
                    name="walks"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="hometype"
                    label="Home Type"
                    name="hometype"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="outdoorsize"
                    label="Outdoor Size"
                    name="outdoorsize"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="emergencytransport"
                    label="Emergency Transport"
                    name="emergencytransport"
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
                Register Shop Details
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
