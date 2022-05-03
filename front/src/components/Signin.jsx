import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccessData } from "../Redux/Login/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal } from "@mui/material";

const theme = createTheme();

export default function SignIn({ mode }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { loading } = useSelector((store) => store.LogInReducer);

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
        password: event.target.password.value,
      };

      dispatch(loginSuccessData(payload, navigate, toast));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ paddingBottom: "136px" }}>
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="Username"
              label="Username"
              name="Username"
              autoFocus
              InputLabelProps={
                mode === "light" ? null : { style: { color: "white" } }
              }
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
              InputLabelProps={
                mode === "light" ? null : { style: { color: "white" } }
              }
            />

            {loading ? (
              <>
                <Modal
                  open={true}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    style={{
                      height: "70%",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "5%",
                    }}
                  >
                    <img
                      src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp?cid=ecf05e47cum4nbvgem4krbwqndsxab7obx8hq20g5l2hygcx&rid=giphy.webp&ct=g"
                      alt=""
                      style={{
                        width: "44%",
                        height: "70%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Modal>
              </>
            ) : null}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  onClick={() => navigate("/register")}
                  sx={{ cursor: "pointer" }}
                  variant="body2"
                >
                  {"Don't have an account? Sign Up"}
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
