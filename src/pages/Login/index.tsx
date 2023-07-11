import React, { ChangeEvent, useState } from "react";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import Layout from "../../components/Layout";
import "./login.css";
import CustomButton from "../../components/Button";

const Login = () => {
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };
    console.log(data);
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
          <form onSubmit={handleOnSubmit}>
            <div className="containerForm">
              <label>Correo electrónico de Dacodes</label>
              <input
                name="email"
                className="input-style"
                type="email"
                onChange={handleChange}
                value={email}
              />
              <label>Contraseña</label>
              <input
                name="password"
                className="input-style"
                type="password"
                onChange={handleChange}
                value={password}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    value={auth}
                    onChange={(e) => setAuth(e.target.checked)}
                    checked={auth}
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

              <div className="container-button">
                <CustomButton label="Crear cuenta" />
              </div>
            </div>
          </form>
        </Box>
      </>
    </Layout>
  );
};

export default Login;
