import "./Login.css";

function Login({ openRegister }) {

    return (

        <div className="login-box">

            <h2>Patient Login</h2>

            <input
                type="email"
                placeholder="Enter Email"
            />

            <input
                type="password"
                placeholder="Enter Password"
            />

            <button className="login-btn">
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