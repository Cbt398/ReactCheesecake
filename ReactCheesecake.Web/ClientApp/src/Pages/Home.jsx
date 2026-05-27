import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';


const Home = () => {
    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100vh", backgroundColor: "rgb(238, 238, 238)", marginTop: 50 }}
        >
            <div className="text-center">
                <h1 className="display-4">Welcome to the Cheesecake Factory</h1>
                <Link to="/order">
                    <button className="btn btn-dark btn-lg">
                        Click here to order your own custom cheesecake
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;

