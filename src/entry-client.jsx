import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import { Router } from "./router";

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
