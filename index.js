import React from "react";
import ReactDOM from "react-dom";
//my app
import App from "./App";
//routerDOM
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
