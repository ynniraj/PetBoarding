import React from "react";
import ShowTable from "./ShowTable";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../Redux/Login/action";
import LoginFirst from "./LoginFirst";

const Home = ({ mode }) => {
  const token = useSelector((store) => store.LogInReducer.token);

  const dispatch = useDispatch();

  const localStorageToken = localStorage.getItem("token");

  dispatch(userLogin(localStorageToken));
  return <>{!token ? <LoginFirst /> : <ShowTable mode={mode} />}</>;
};

export default Home;
