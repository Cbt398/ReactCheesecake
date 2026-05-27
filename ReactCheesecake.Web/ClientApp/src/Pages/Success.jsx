import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';


const success = () => {
    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100vh", backgroundColor: "rgb(238, 238, 238)", marginTop: 50 }}
        >
            <div className="text-center">
                <h1 className="display-4">Your order has been submitted.</h1>
                <p className="lead">
                    You will receive a confirmation email shortly. Thank you and enjoy!
                </p>

            </div>
        </div>
    );
}

export default success;
