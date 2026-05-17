import "./Login.css";
import {login} from "../services/authenticationService";
import {DOCTOR_TYPE, PATIENT_TYPE} from "../constants";
import { useRef } from "react";

function Login({ openRegister, page }) {
    const emailRef=useRef("");
    const passwordRef=useRef("");

    const isDoctorsPage = page === "DoctorsLogin";
    console.log("page"+ page);

    const loginCall = () =>{
        const type = isDoctorsPage ? DOCTOR_TYPE: PATIENT_TYPE;
        login(type,emailRef.current,passwordRef.current);
    }
    return (
        <div className="login-box">

            <h2>{ isDoctorsPage ? (<>Doctor's</>) : (<>Patient's</>)} Login</h2>
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