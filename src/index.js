import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./styles/global.css";

// const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_KEY);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
