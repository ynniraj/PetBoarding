import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../components/Signup";
import SignIn from "../components/Signin";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import PetDetails from "../components/PetDetails";
import CreatePetShop from "../components/CreatePetShop";
import CreatePetDetail from "../components/CreatePetDetail";

const Routers = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/petstoredetails" element={<PetDetails />} />
        <Route exact path="/createpetshop" element={<CreatePetShop />} />
        <Route exact path="/createpetdetails" element={<CreatePetDetail />} />
      </Routes>
    </>
  );
};

export default Routers;
