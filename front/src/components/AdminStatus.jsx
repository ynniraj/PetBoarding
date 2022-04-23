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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Pet Name</StyledTableCell>
                <StyledTableCell align="right">Pet Type</StyledTableCell>
                <StyledTableCell align="right">Start Date</StyledTableCell>
                <StyledTableCell align="right">End Date</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">View</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userpet.map((el) => (
                <StyledTableRow key={el._id} sx={{ cursor: "pointer" }}>
                  <StyledTableCell align="right">{el.name}</StyledTableCell>
                  <StyledTableCell align="right">{el.pettype}</StyledTableCell>
                  <StyledTableCell align="right">
                    {el.startdate}
                  </StyledTableCell>
                  <StyledTableCell align="right">{el.enddate}</StyledTableCell>
                  <StyledTableCell align="right">
                    {
                      <Button onClick={() => handleStatus(el._id)}>
                        {el.status}
                      </Button>
                    }
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {
                      <Button onClick={() => handleUserDetails(el._id)}>
                        View
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
