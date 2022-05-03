import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../components/Signup";
import SignIn from "../components/Signin";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import PetDetails from "../components/PetDetails";
import CreatePetShop from "../components/CreatePetShop";
import CreatePetDetail from "../components/CreatePetDetail";
import UserPet from "../components/UserPet";
import PetStatus from "../components/PetStatus";
import AdminStatus from "../components/AdminStatus";
import AdminUserDetails from "../components/AdminUserDetails";
import PetStatusShop from "../components/PetStatusShop";
import { Box, createTheme } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

const Routers = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      <div
        style={{
          backgroundColor: mode === "light" ? "white" : "#303030",
          width: "100%",
        }}
      >
        <ThemeProvider theme={darkTheme}>
          <Navbar setMode={setMode} mode={mode} />
          <Routes>
            <Route exact path="/" element={<Home mode={mode} />} />
            <Route exact path="/register" element={<SignUp mode={mode} />} />
            <Route exact path="/login" element={<SignIn mode={mode} />} />
            <Route
              exact
              path="/petstoredetails"
              element={<PetDetails mode={mode} />}
            />
            <Route exact path="/createpetshop" element={<CreatePetShop />} />
            <Route
              exact
              path="/createpetdetails"
              element={<CreatePetDetail />}
            />
            <Route
              exact
              path="/createuserpet"
              element={<UserPet mode={mode} />}
            />
            <Route exact path="/petstatus" element={<PetStatus />} />
            <Route exact path="/allpetstatus" element={<AdminStatus />} />
            <Route
              exact
              path="/adminuserdetails"
              element={<AdminUserDetails />}
            />
            <Route
              exact
              path="/petstatusshop"
              element={<PetStatusShop mode={mode} />}
            />
          </Routes>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Routers;
