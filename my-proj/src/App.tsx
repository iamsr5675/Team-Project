import React, { Fragment } from "react";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/registration/sign-up";
import Login from "./pages/registration/login";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Fragment>
  );
}

export default App;
