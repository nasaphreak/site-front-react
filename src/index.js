import React from "react"
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
//import "./index.css";
import "./assets/css/main.css"
import "./assets/css/stylesheet.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from "./pages/templates/menu";
import { Routes } from './routes'



// ========================================

ReactDOM.render(
    <div className="background-principal">
        <BrowserRouter>
            <Menu />
            <Routes />
        </BrowserRouter>
    </div>
    ,
    document.getElementById('root')
);
