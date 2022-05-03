import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TabPanel from "@mui/lab/TabPanel";
import { Button, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function PetStatusShop({ mode }) {
  const navigate = useNavigate();

  const [value, setValue] = React.useState("1");
  const [data, setData] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getuserpetdetails();
  }, []);

  const [image, setImg] = useState({});
  const getuserpetdetails = () => {
    const petStatus = localStorage.getItem("petStatus");
    axios
      .get(
        `https://petshop-project.herokuapp.com/adminuserdetails/${petStatus}`
      )
      .then((res) => {
        console.log(res);
        setImg(res.data.petshopdetail[0]);
        setData([res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(image);
  return (
    <>
      <Container sx={{ paddingBottom: "3%" }}>
        <Box sx={{ display: "flex", justifyContent: "space-around", mt: 5 }}>
          <Box sx={{ width: "40%" }}>
            <img src={image.image} alt="" srcset="" style={{ width: "100%" }} />
          </Box>
          <Box sx={{ width: "50%" }}>
            <h3
              style={{
                fontSize: "30px",
                margin: "0px",
                padding: "0px",
                marginBottom: "10px",
                color: mode === "light" ? "#000" : "#fff",
              }}
            >
              {image.name}
            </h3>
            <p
              style={{
                fontSize: "41px",
                margin: "0px",
                padding: "0px",
                fontWeight: "600",
                color: mode === "light" ? "#000" : "#fff",
              }}
            >
              WE KEEP YOUR PETS HAPPY ALL TIME
            </p>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 3 }}>
                <Item>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Our Mission" value="1" sx={{ mr: 30, ml: 5 }} />
                    <Tab label="Book A Slot " value="2" />
                  </TabList>
                </Item>
              </Box>
              <Item>
                <TabPanel value="1" sx={{ fontSize: "15px" }}>
                  Saving one dog will not change the world, but surely for that
                  one dog, the world will change forever.
                </TabPanel>
                <TabPanel value="2" sx={{ fontSize: "30px" }}>
                  <Button
                    onClick={() => navigate("/createuserpet")}
                    variant="contained"
                    color="success"
                    endIcon={<SendIcon />}
                  >
                    Book Again
                  </Button>
                </TabPanel>
              </Item>
            </TabContext>
          </Box>
        </Box>

        {data.map((el) => (
          <Box sx={{ mt: 5 }} key={el._id}>
            <h3
              style={{
                textAlign: "center",
                fontSize: "24px",
                marginTop: "50px",
                color: mode === "light" ? "#000" : "#fff",
              }}
            >
              Services We Provide
            </h3>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Item sx={{ p: 2 }}>
                  Shop Name
                  <p
                    style={{
                      margin: "0px",
                      padding: "0px",
                      paddingTop: "10px",
                    }}
                  >
                    {el.petshopdetail[0].name}
                  </p>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item sx={{ p: 2 }}>
                  City
                  <p
                    style={{
                      margin: "0px",
                      padding: "0px",
                      paddingTop: "10px",
                    }}
                  >
                    {" "}
                    {el.petshopdetail[0].city}
                  </p>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item sx={{ p: 2 }}>
                  Address
                  <p
                    style={{
                      margin: "0px",
                      padding: "0px",
                      paddingTop: "10px",
                    }}
                  >
                    {el.petshopdetail[0].address}
                  </p>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item sx={{ p: 2 }}>
                  Cost Per Day
                  <p
                    style={{
                      margin: "0px",
                      padding: "0px",
                      paddingTop: "10px",
                    }}
                  >
                    {el.petshopdetail[0].costperday}
                  </p>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item sx={{ p: 2 }}>
                  Verified Or Not
                  <p
                    style={{
                      margin: "0px",
                      padding: "0px",
                      paddingTop: "10px",
                    }}
                  >
                    {el.petshopdetail[0].verified}
                  </p>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item sx={{ p: 2 }}>
                  Ratings
                  <p
                    style={{
                      margin: "0px",
                      padding: "0px",
                      paddingTop: "10px",
                    }}
                  >
                    {el.petshopdetail[0].rating}
                  </p>
                </Item>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Container>
    </>
  );
}
