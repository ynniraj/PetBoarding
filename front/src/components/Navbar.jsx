import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogin, adminLogin, userImage } from "../Redux/Login/action";
import { SortedbyNameData } from "../Redux/DataApi/action";
import { Switch } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = ({ mode, setMode }) => {
  const dispatch = useDispatch();

  const token = useSelector((store) => store.LogInReducer.token);
  const admin = useSelector((store) => store.adminReducer.admin);
  const userImages = useSelector((store) => store.userImageReducer.image);
  const localStorageToken = localStorage.getItem("token");
  dispatch(userLogin(localStorageToken));
  const localStorageAdmin = localStorage.getItem("admin");
  dispatch(adminLogin(localStorageAdmin));
  const localStorageImage = localStorage.getItem("user_image");
  dispatch(userImage(localStorageImage));

  const navigate = useNavigate();
  const username = localStorage.getItem("user_name");

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [city, setCity] = useState("");
  const handleSubmitCity = (e) => {
    e.preventDefault();
    dispatch(SortedbyNameData("city", city));
  };

  const handleSignup = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    dispatch(userLogin({}));
    localStorage.setItem("token", "");
    localStorage.setItem("admin", "");
    localStorage.setItem("user_id", "");
    localStorage.setItem("user_image", "");
    localStorage.setItem("user_name", "");
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            Pet Shop
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={() => navigate("/")}>
                  Home
                </Typography>
                <Typography textAlign="center">CreatePetShop</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            onClick={() => navigate("/")}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => navigate("/")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>

            {admin ? (
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => navigate("/createpetdetails")}
              >
                New Shop
              </Button>
            ) : (
              ""
            )}

            {admin ? (
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => navigate("/allpetstatus")}
              >
                Check Orders
              </Button>
            ) : (
              ""
            )}
            {admin ? (
              ""
            ) : (
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => navigate("/petstatus")}
              >
                Pet Status
              </Button>
            )}
          </Box>

          {token ? (
            <Box sx={{ display: "flex", mr: "30%" }}>
              <form action="" onSubmit={handleSubmitCity}>
                <input
                  type="text"
                  placeholder="Search By City Name"
                  style={{
                    padding: "10px",
                    outline: "none",
                    borderRadius: "10px",
                    border: "none",
                    fontSize: "16px",
                  }}
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  type="submit"
                  value="Search"
                  style={{
                    padding: "10px",
                    marginLeft: "10px",
                    borderRadius: "9px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "white",
                  }}
                />
              </form>
            </Box>
          ) : (
            ""
          )}
          <LightModeIcon />
          <Switch
            onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
          />
          <DarkModeIcon sx={{ mr: 5 }} />

          {token ? (
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "14px",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              {username}
            </Typography>
          ) : null}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: 3 }}>
                <Avatar alt="Remy Sharp" src={userImages} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" sx={{ padding: "2px" }}>
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  onClick={!token ? handleSignup : handleLogout}
                  sx={{ padding: "2px" }}
                >
                  {!token ? "Login" : "Logout"}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
