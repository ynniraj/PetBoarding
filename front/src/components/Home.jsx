import React from "react";
import ShowTable from "./ShowTable";
import { useSelector } from "react-redux";
import LoginFirst from "./LoginFirst";

const Home = ({ mode }) => {
  const token = useSelector((store) => store.LogInReducer.token);

  return <>{!token ? <LoginFirst /> : <ShowTable mode={mode} />}</>;
};

export default Home;
