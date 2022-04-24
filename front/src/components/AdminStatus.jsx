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

export default function AdminStatus() {
  const navigate = useNavigate();
  const [userpet, setUserpet] = useState([]);
  useEffect(() => {
    getalluser();
  }, []);

  const getalluser = () => {
    axios
      .get(`https://petshop-project.herokuapp.com/getuserpet`)
      .then((res) => {
        console.log(res);
        setUserpet(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUserDetails = (id) => {
    localStorage.setItem("adminuserid", id);
    navigate("/adminuserdetails");
  };

  const handleStatus = (id) => {
    const payload = {
      status: "Confirmed",
    };
    axios
      .patch(`https://petshop-project.herokuapp.com/adminpatch/${id}`, payload)
      .then((response) => {
        getalluser();
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(payload);
  };

  return (
    <>
      <Container component="main" maxWidth="m">
        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Pet Name</StyledTableCell>
                <StyledTableCell align="center">Pet Type</StyledTableCell>
                <StyledTableCell align="center">Start Date</StyledTableCell>
                <StyledTableCell align="center">End Date</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">View</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userpet.map((el) => (
                <StyledTableRow key={el._id} sx={{ cursor: "pointer" }}>
                  <StyledTableCell align="center">{el.name}</StyledTableCell>
                  <StyledTableCell align="center">{el.pettype}</StyledTableCell>
                  <StyledTableCell align="center">
                    {el.startdate}
                  </StyledTableCell>
                  <StyledTableCell align="center">{el.enddate}</StyledTableCell>
                  <StyledTableCell align="center">
                    {el.status === "Confirmed" ? (
                      <Button
                        onClick={() => handleStatus(el._id)}
                        color="success"
                        variant="contained"
                      >
                        {el.status}
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleStatus(el._id)}
                        color="error"
                        variant="outlined"
                      >
                        {el.status}
                      </Button>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {
                      <Button
                        onClick={() => handleUserDetails(el._id)}
                        variant="contained"
                      >
                        User
                      </Button>
                    }
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
