import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css";
import App from "./components/App";
import "./App.css"

 
render(
    <Router>
        <App/>
    </Router>,
    document.getElementById("root")
);
