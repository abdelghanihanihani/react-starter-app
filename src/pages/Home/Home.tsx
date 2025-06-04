import React from 'react';
import Navbar from 'components/navbar/NavBar';
import Login from 'components/login/Login';
import {Outlet} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Home;