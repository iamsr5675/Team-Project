import React, { Fragment } from "react";
import "./App.css";
import { CssBaseline } from "@mui/material";
import SignUp from "./pages/registration/sign-up";

function App() {
  return (
    <>
      <CssBaseline />
      <Fragment>
        <SignUp />
      </Fragment>
    </>
  );
}

export default App;
