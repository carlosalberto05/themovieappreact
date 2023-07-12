// import { AccountCircle } from "@mui/icons-material";
import { AppBar, Box, Toolbar } from "@mui/material";
import imgDacodes from "../../assets/DacodesLogo.jpg";
import imgUser from "../../assets/user.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
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
          <img
            src={imgDacodes}
            alt="logoDacodes"
            style={{ width: "172px" }}
            onClick={() => navigate("/")}
          />
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
