import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
require("dotenv").config();

const port = process.env.PORT || 3000;

app.listen(port, console.log(`Server running on port ${port}`));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
