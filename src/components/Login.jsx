import "./Login.css";
import {login} from "../services/authenticationService";
import {DOCTOR_TYPE, PATIENT_TYPE} from "../constants";
import { useRef } from "react";

function Login({ openRegister, page ,setPage }) {
    const emailRef=useRef("");
    const passwordRef=useRef("");

    const isDoctersPage = page === "DoctorsLogin";
    console.log("page"+ page);

    const loginCall = async () =>{
        const type = isDoctersPage ? DOCTOR_TYPE: PATIENT_TYPE;
        const status = await login(type,emailRef.current,passwordRef.current);
        if(status === "success"){
            console.log("Login Successful"); 
            setPage("Doctors");
        }
    }
    return (
        <div className="login-box">

            <h2>{ isDoctersPage ? (<>Doctor's</>) : (<>Patient's</>)} Login</h2>
            <input
                type="email" onChange={(e)=>{
                    emailRef.current=e.target.value;
                }}
                placeholder="Enter Email"
            />

            <input
                type="password" onChange={(e)=>{
                    passwordRef.current=e.target.value;
                }}
                placeholder="Enter Password"
            />

            <button className="login-btn" onClick={loginCall} >
                Login
            </button>

            <p>
                Don't have account?
            </p>

            <button
                className="register-btn"
                onClick={openRegister}
            >
                Register Now
            </button>

        </div>
    );
}

export default Login;