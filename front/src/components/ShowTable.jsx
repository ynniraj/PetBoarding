import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { productSuccessData, setProducts } from "../Redux/DataApi/action";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ShowTable({ mode }) {
  const dispatch = useDispatch();

  const getTableData = useSelector((store) => store.getDataReducer.products);
  const { loading } = useSelector((store) => store.getDataReducer);

  const admin = useSelector((store) => store.adminReducer.admin);

  const navigate = useNavigate();

  useEffect(() => {
    getpetdata();
  }, []);

  const getpetdata = () => {
    dispatch(productSuccessData());
  };

  const handlePetDetails = (id) => {
    localStorage.setItem("pets_id", id);
    navigate("/petstoredetails");
  };

  const handleHighSort = () => {
    axios
      .get(
        `https://petshop-project.herokuapp.com/sortedpetshop?sorttype=costperday&sortdirection=-1`
      )
      .then((response) => {
        console.log(response.data);
        dispatch(setProducts(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlelowSort = () => {
    axios
      .get(
        `https://petshop-project.herokuapp.com/sortedpetshop?sorttype=costperday&sortdirection=1`
      )
      .then((response) => {
        console.log(response.data);
        dispatch(setProducts(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleVerifiedSort = () => {
    axios
      .get(`https://petshop-project.herokuapp.com/getbyverified/Verified`)
      .then((response) => {
        console.log(response.data);
        dispatch(setProducts(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUnverifiedSort = () => {
    axios
      .get(`https://petshop-project.herokuapp.com/getbyverified/Unverified`)
      .then((response) => {
        console.log(response.data);
        dispatch(setProducts(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRatingHigh = () => {
    axios
      .get(
        `https://petshop-project.herokuapp.com/sortedpetshop?sorttype=rating&sortdirection=-1`
      )
      .then((response) => {
        console.log(response.data);
        dispatch(setProducts(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRatingLow = () => {
    axios
      .get(
        `https://petshop-project.herokuapp.com/sortedpetshop?sorttype=rating&sortdirection=1`
      )
      .then((response) => {
        console.log(response.data);
        dispatch(setProducts(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");

  const handleUpdateChanges = (event) => {
    event.preventDefault();
    const payload = {
      name: event.target.name.value,
      city: event.target.city.value,
      costperday: event.target.costperday.value,
      rating: event.target.rating.value,
      petshopdetails: JSON.parse(localStorage.getItem("petdeatilId")),
    };
    axios
      .patch(
        `https://petshop-project.herokuapp.com/petshopupdate/${id}`,
        payload
      )
      .then((response) => {
        getpetdata();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://petshop-project.herokuapp.com/deletepetshop/${id}`)
      .then((response) => {
        console.log(response);
        getpetdata();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Box>
        <Container component="main" maxWidth="m">
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <img
                src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                alt=""
                style={{ width: "80%" }}
              />
            </Box>
          ) : (
            <>
              <Box
                component="form"
                noValidate
                sx={{
                  mx: 2,
                  mt: 3,
                  mb: 3,
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Box>
                  <Button variant="contained" onClick={handleHighSort}>
                    Sort Cost High to Low
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ mx: 2 }}
                    onClick={handlelowSort}
                  >
                    Sort Cost Low to High
                  </Button>
                </Box>
                <Box>
                  <Button variant="contained" onClick={handleVerifiedSort}>
                    Sort Verified
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ mx: 2 }}
                    onClick={handleUnverifiedSort}
                  >
                    Sort Unverified
                  </Button>
                </Box>
                <Box>
                  <Button variant="contained" onClick={handleRatingHigh}>
                    Sort Rating High To Low
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ mx: 2 }}
                    onClick={handleRatingLow}
                  >
                    Sort Rating Low To High
                  </Button>
                </Box>
              </Box>

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">Name</StyledTableCell>
                      <StyledTableCell align="center">City</StyledTableCell>
                      <StyledTableCell align="center">Address</StyledTableCell>
                      <StyledTableCell align="center">Capacity</StyledTableCell>
                      <StyledTableCell align="center">
                        Cost per day
                      </StyledTableCell>
                      <StyledTableCell align="center">Verified</StyledTableCell>
                      <StyledTableCell align="center">Rating</StyledTableCell>
                      <StyledTableCell align="center">Image</StyledTableCell>
                      {admin ? (
                        <>
                          <StyledTableCell align="center">Edit</StyledTableCell>
                          <StyledTableCell align="center">
                            Delete
                          </StyledTableCell>
                        </>
                      ) : (
                        ""
                      )}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {getTableData.map((el) => (
                      <StyledTableRow key={el._id} sx={{ cursor: "pointer" }}>
                        <StyledTableCell align="center">
                          {el.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {el.city}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {el.address}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {el.capacity}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {el.costperday}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {el.verified}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {el.rating}
                        </StyledTableCell>
                        <StyledTableCell
                          align="center"
                          sx={{ width: "14%" }}
                          onClick={() => handlePetDetails(el._id)}
                        >
                          {" "}
                          <img
                            src={el.image}
                            alt=""
                            style={{ width: "100%" }}
                          />{" "}
                        </StyledTableCell>
                        {admin ? (
                          <>
                            <StyledTableCell align="center">
                              <Button
                                onClick={() => setOpen(true) || setId(el._id)}
                                variant="contained"
                                color="success"
                              >
                                Edit
                              </Button>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              <Button
                                onClick={() => handleDelete(el._id)}
                                variant="contained"
                                color="error"
                              >
                                Delete
                              </Button>
                            </StyledTableCell>
                          </>
                        ) : (
                          ""
                        )}
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </Container>
        <Modal
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "600px",
              height: "250px",
              borderRadius: "10px",
            }}
            bgcolor={mode === "light" ? "white" : "black"}
          >
            <Box
              noValidate
              sx={{ mt: 1, padding: "30px" }}
              component="form"
              onSubmit={handleUpdateChanges}
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
                    autoComplete="off"
                    name="city"
                    required
                    fullWidth
                    id="city"
                    label="City"
                    autoFocus
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
                    id="rating"
                    label="Ratings"
                    name="rating"
                    autoComplete="off"
                  />
                </Grid>
              </Grid>

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                type="submit"
              >
                Update Changes
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
}
