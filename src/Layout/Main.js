import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Home from '../Pages/Home/Home/Home';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;