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
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/DataApi/action";

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

export default function ShowTable() {
  const dispatch = useDispatch();

  const getTableData = useSelector((store) => store.getDataReducer.products);

  const navigate = useNavigate();

  useEffect(() => {
    getpetdata();
  }, []);

  const getpetdata = () => {
    axios
      .get("https://petshop-project.herokuapp.com/getpetshop")
      .then((res) => {
        console.log(res.data);
        dispatch(setProducts(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePetDetails = (id) => {
    localStorage.setItem("pets_id", id);
    navigate("/petstoredetails");
  };

  const handleHighSort = () => {
    axios
      .get(`https://petshop-project.herokuapp.com/highsortedpetshop`)
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
      .get(`https://petshop-project.herokuapp.com/lowsortedpetshop`)
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
      .get(`https://petshop-project.herokuapp.com/highrating`)
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
      .get(`https://petshop-project.herokuapp.com/lowrating`)
      .then((response) => {
        console.log(response.data);
        dispatch(setProducts(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container component="main" maxWidth="m">
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
              Sort High to Low
            </Button>
            <Button variant="contained" sx={{ mx: 2 }} onClick={handlelowSort}>
              Sort Low to High
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
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">City</StyledTableCell>
                <StyledTableCell align="right">Address</StyledTableCell>
                <StyledTableCell align="right">Capacity</StyledTableCell>
                <StyledTableCell align="right">Cost per day</StyledTableCell>
                <StyledTableCell align="right">Verified</StyledTableCell>
                <StyledTableCell align="right">Rating</StyledTableCell>
                <StyledTableCell align="right">Image</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getTableData.map((el) => (
                <StyledTableRow
                  key={el._id}
                  onClick={() => handlePetDetails(el._id)}
                  sx={{ cursor: "pointer" }}
                >
                  <StyledTableCell align="right">{el.name}</StyledTableCell>
                  <StyledTableCell align="right">{el.city}</StyledTableCell>
                  <StyledTableCell align="right">{el.address}</StyledTableCell>
                  <StyledTableCell align="right">{el.capacity}</StyledTableCell>
                  <StyledTableCell align="right">
                    {el.costperday}
                  </StyledTableCell>
                  <StyledTableCell align="right">{el.verified}</StyledTableCell>
                  <StyledTableCell align="right">{el.rating}</StyledTableCell>
                  <StyledTableCell align="right" sx={{ width: "14%" }}>
                    {" "}
                    <img src={el.image} alt="" style={{ width: "100%" }} />{" "}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
