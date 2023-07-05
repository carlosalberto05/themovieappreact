// import { AccountCircle } from "@mui/icons-material";
import { AppBar, Box, Toolbar } from "@mui/material";
import imgDacodes from "../../assets/DacodesLogo.jpg";
import imgUser from "../../assets/user.jpg";

const Navbar = () => {
  const auth = true;
  return (
    <Box>
      <AppBar position="static" style={{ backgroundColor: "#5141EA" }}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "3%",
          }}
        >
          <img src={imgDacodes} alt="logoDacodes" style={{ width: "172px" }} />
          {auth && (
            <div>
              <img src={imgUser} alt="user" style={{ width: "60%" }} />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
