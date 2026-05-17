import "./Register.css";
import { useRef } from "react";
import {register} from "../services/authenticationService";

function Register({ openLogin }) {
    const nameRef=useRef("");
    const emailRef=useRef("");
    const mobileRef=useRef("");
    const addressRef=useRef("");
    const passwordRef=useRef("");
   const registerCall = () =>{
       register(nameRef.current,emailRef.current,mobileRef.current,addressRef.current,passwordRef.current);
    }

    return (
        <div className="register-box">
            <h2>Patient Register</h2>
            <input type="text" onChange={(e)=>{nameRef.current=e.target.value;}} placeholder="Enter Name" />
            <input type="email" onChange={(e)=>{emailRef.current=e.target.value;}} placeholder="Enter Email Id" />
            <input type="text" onChange={(e)=>{mobileRef.current=e.target.value;}} placeholder="Enter Mobile No" />
            <input type="text" onChange={(e)=>{addressRef.current=e.target.value;}} placeholder="Enter Address"/>
            <input type="password" onChange={(e)=>{passwordRef.current=e.target.value;}} placeholder="Enter Password" />
            <button className="register-submit-btn" onClick={registerCall}>Register</button>
            <p>Already have account?</p>
            <button className="back-login-btn" >Back To Login</button>
        </div>
    );
}

export default Register;