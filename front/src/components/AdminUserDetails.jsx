import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TabPanel from "@mui/lab/TabPanel";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { selectProducts } from "../Redux/DataApi/action";
import { useDispatch, useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AdminUserDetails() {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getAdminUserData();
  }, []);

  const [userData, setUserData] = useState([]);
  const getAdminUserData = () => {
    const adminuserid = localStorage.getItem("adminuserid");
    axios
      .get(`https://petshop-project.herokuapp.com/adminuserdetails/${adminuserid}`)
      .then((res) => {
        console.log(res);
        setUserData([res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Container>
        {userData.map((el) => (
          <Box
            sx={{ display: "flex", justifyContent: "space-around", mt: 5 }}
            key={el._id}
          >
            <Box sx={{ width: "40%" }}>
              <img
                src={
                  el.userid[0].image
                    ? el.userid[0].image
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tBbzVZlIvgshAFiNpeCsuFW-UE3dZpnIxQ&usqp=CAU"
                }
                alt=""
                srcset=""
                style={{ width: "100%" }}
              />
            </Box>
            <Box sx={{ width: "50%" }}>
              <h3
                style={{
                  fontSize: "30px",
                  margin: "5px",
                  padding: "0px",
                  marginBottom: "10px",
                }}
              >
                {el.userid[0].username}
              </h3>
              <p
                style={{
                  fontSize: "30px",
                  margin: "0px",
                  padding: "5px",
                  fontWeight: "600",
                }}
              >
                Email :- {el.userid[0].email}
              </p>
              <p
                style={{
                  fontSize: "30px",
                  margin: "0px",
                  padding: "5px",
                  fontWeight: "600",
                }}
              >
                Phone :- {el.userid[0].phone}
              </p>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 3 }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Our Mission" value="1" sx={{ mr: 30, ml: 5 }} />
                    <Tab label="Our Vission" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1" sx={{ fontSize: "20px" }}>
                  Saving one dog will not change the world, but surely for that
                  one dog, the world will change forever.
                </TabPanel>
                <TabPanel value="2" sx={{ fontSize: "20px" }}>
                  A dog is the only thing on earth that loves you more than he
                  loves himself.
                </TabPanel>
              </TabContext>
            </Box>
          </Box>
        ))}
      </Container>
    </>
  );
}
