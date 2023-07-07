import { Box, TextField, Typography } from "@mui/material";
import Layout from "../../components/Layout";

const Login = () => {
  return (
    <Layout>
      <>
        <Box>
          <Typography variant="h5" color={"white"}>
            Login
          </Typography>
          <Typography variant="subtitle2" color={"white"}>
            ¡Bienvenido!
          </Typography>
          <form>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ color: "white" }}>
                Correo electrónico de Dacodes
              </label>
              <input style={{ width: "30%", backgroundColor: "#5141EA" }} />
            </div>
          </form>
        </Box>
      </>
    </Layout>
  );
};

export default Login;
