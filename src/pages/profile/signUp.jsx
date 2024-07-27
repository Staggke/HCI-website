import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";

function Form2() {
    return (
        <div className="main">
            <p className="sign" align="center">
                Sign up
            </p>
            <form className="form1">
                <input className="email" type="text" placeholder="Email" />
                <input className="username" type="text" placeholder="Username" />
                <input className="password" type="password" placeholder="Password" />
                <a className="submit" align="center">
                    Create Account
                </a>
            </form>
        </div>
    );
}

export default Form2;