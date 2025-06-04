import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import './App.css';

import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Home from "./pages/Home/Home";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route index element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Route>
            </Routes>
        </Router>

    )
}

export default App;
