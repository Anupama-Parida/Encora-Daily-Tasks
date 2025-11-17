import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const element = React.createElement("h1", {}, "Hello from React");
ReactDOM.createRoot(document.getElementById("root")).render(element);
