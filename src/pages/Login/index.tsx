import React, { ChangeEvent } from "react";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import Layout from "../../components/Layout";
import "./login.css";

const Login = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
  };

  return (
    <Layout>
      <>
        <Box className="container-login">
          <Typography variant="h4" color={"white"}>
            Login
          </Typography>
          <Typography variant="subtitle1" color={"white"}>
            ¡Bienvenido!
          </Typography>
          <br />
          <form>
            <div className="containerForm">
              <label>Correo electrónico de Dacodes</label>
              <input
                name="email"
                className="input-style"
                type="email"
                onChange={handleChange}
              />
              <label>Contraseña</label>
              <input
                name="password"
                className="input-style"
                type="password"
                onChange={handleChange}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "rgba(217, 217, 217, 0.50)",
                      "&.Mui-checked": {
                        color: "rgba(217, 217, 217, 0.50)",
                      },
                    }}
                  />
                }
                label="He leido y acepto los terminos y condiciones"
              />
            </div>
          </form>
        </Box>
      </>
    </Layout>
  );
};

export default Login;
