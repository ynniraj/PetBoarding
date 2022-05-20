import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

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

export default function PetStatus() {
  const navigate = useNavigate();

  useEffect(() => {
    getuserpetdetails();
  }, []);

  const [getTableData, setTableData] = useState([]);

  const getuserpetdetails = () => {
    const getuserid = localStorage.getItem("user_id");
    axios
      .get(`https://petshop-project.herokuapp.com/getuserpetbyid/${getuserid}`)
      .then((res) => {
        console.log(res);
        setTableData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePetStatus = (id) => {
    localStorage.setItem("petStatus", id);
    navigate("/petstatusshop");
  };

  return (
    <>
      <Container component="main" maxWidth="s" sx={{ height: "100vh" }}>
        <TableContainer component={Paper} sx={{ mt: 5 }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Pet Name</StyledTableCell>
                <StyledTableCell align="center">Pet Type</StyledTableCell>
                <StyledTableCell align="center">Start Date</StyledTableCell>
                <StyledTableCell align="center">End Date</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getTableData.map((el) => (
                <StyledTableRow key={el._id} sx={{ cursor: "pointer" }}>
                  <StyledTableCell
                    align="center"
                    onClick={() => handlePetStatus(el._id)}
                  >
                    {el.name}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    onClick={() => handlePetStatus(el._id)}
                  >
                    {el.pettype}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    onClick={() => handlePetStatus(el._id)}
                  >
                    {el.startdate}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    onClick={() => handlePetStatus(el._id)}
                  >
                    {el.enddate}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {el.status === "Confirmed" ? (
                      <Button
                        color="success"
                        variant="contained"
                        onClick={() => navigate("/checkout")}
                      >
                        Pay
                      </Button>
                    ) : (
                      <Button color="error" variant="outlined">
                        {el.status}
                      </Button>
                    )}

                    
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
