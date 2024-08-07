import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";

function Form() {
    return (
        <div className="main">
            <p className="sign" align="center">
                Sign in
            </p>
            <form className="form1">
                <input className="username" type="text" placeholder="Username" />
                <input className="password" type="password" placeholder="Password" />
                <a className="submit" align="center">
                    Sign in
                </a>
                <p className="forgot" align="center">
                    <a href="#">Forgot Password? </a>
                </p>
                <div className="submit2" align="center">
                    <Link to="/HCI-website/sign-up" >  Sign up </Link>    
                </div>
            </form>
        </div>
    );
}

export default Form;