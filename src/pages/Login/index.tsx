import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import Layout from "../../components/Layout";
import "./login.css";
import CustomButton from "../../components/Button";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [guestSessionId, setGuestSessionId] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const checkFields = () => {
    return email === "" || password === "" || check === false;
  };

  const isFieldsEmpty = checkFields();

  const handleOnSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      //Llamada a la API de autenticación
      const url =
        "https://api.themoviedb.org/3/authentication/guest_session/new";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjg0MDIyMTUxNzJmZWE0Zjk2NTY2YWUwMTlmNmI1ZCIsInN1YiI6IjVkY2FlMmRjNDcwZWFkMDAxNTliNDJlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gyQUaLyGm3nsagVVqkhs368oxNUNoQjpx4mGUoV_yos",
        },
      };
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Error en la solicitud a la API");
      }
      const guesId = await response.json();
      // Guardamos el guest_session_id en el estado y en el localStorage.
      setGuestSessionId(guesId.guest_session_id);
      sessionStorage.setItem("guestSessionId", guesId.guest_session_id);
    } catch (error) {
      console.error("Error:", error);
    }

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
                    value={check}
                    onChange={(e) => setCheck(e.target.checked)}
                    checked={check}
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
                <CustomButton label="Crear cuenta" disabled={isFieldsEmpty} />
              </div>
            </div>
          </form>
        </Box>
      </>
    </Layout>
  );
};

export default Login;
