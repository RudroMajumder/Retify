import React from 'react';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import './login.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';


const Login = () => {
    return (
        <div className="home">
            <Header></Header>
            <div className="form">
                <h2 > Create an account </h2>
                <input type="text" name="name" placeholder="Name"/>
                <br/>
                <input type="email" name="email" placeholder="Email Address" />
                <br/>
                <input type="password" name="password" id="" placeholder="Password" />
                <br/>
                <input type="password" name="confirmPassword" id="" placeholder="Confirm Password" />
                <br/>
                <input type="submit" value="Create an account" className="submit-btn"/>
                <br/>
                <p > Already have an account? <span style={{color:"red"}}> login </span> </p>
            </div>
            <p><span className="or"> Or </span></p>
            <div className="text-center">
                <button className="btn"> <FaFacebook size={28}/> Continue in with Facebook </button>
                <br/>
                <button className="btn"> <FaGoogle size={28}/> Continue in with Google </button>
            </div>
        </div>
    );
};

export default Login;