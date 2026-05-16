import "./Register.css";

function Register({ openLogin }) {
    return (
        <div className="register-box">
            <h2>Patient Register</h2>
            <input type="text" placeholder="Enter Name" />
            <input type="email" placeholder="Enter Email Id" />
            <input type="text" placeholder="Enter Mobile No" />
            <input type="text" placeholder="Enter Address"/>
            <input type="password" placeholder="Enter Password" />
            <button className="register-submit-btn">Register</button>
            <p>Already have account?</p>
            <button className="back-login-btn" onClick={openLogin}>Back To Login</button>
        </div>
    );
}

export default Register;