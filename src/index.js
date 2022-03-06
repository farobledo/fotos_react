import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import Inicio from "./components/Inicio";

ReactDOM.render(
  <React.StrictMode>
    <Inicio />,
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();