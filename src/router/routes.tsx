import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

const Router = () => {
  const isLogged = false;

  return (
    <Routes>
      <Route
        path="/"
        element={isLogged ? <Navigate to="/inicio" /> : <Login />}
      />
      <Route path="/inicio" element={<Home />} />
    </Routes>
  );
};

export default Router;
