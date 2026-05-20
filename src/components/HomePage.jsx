import "./HomePage.css";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function HomePage(props) {

    const [showRegister, setShowRegister] = useState(false);
    const page = props.page;
    return (
        <>
        <div>
            <h2>Welcome To Hospital Management System</h2>
            <p>
                Our Hospital Management System helps patients
                book appointments online, check doctor
                availability and manage healthcare services easily.
            </p>
            <p>
                We provide secure patient management,
                doctor scheduling and appointment booking.
            </p>
        </div>
        <div className="home-container">
            {/* RIGHT SECTION */}
            <div className="home-right">

                <img
                    src="https://cdn-icons-png.flaticon.com/512/2966/2966487.png"
                    alt="hospital"
                />

            </div>
            {/* LEFT SECTION */}
            <div className="home-left">
                {
                    showRegister ?
                    <Register openLogin={() => setShowRegister(false)}/>:
                    <Login page={page} openRegister={() => setShowRegister(true)} setPage={props.setPage}/>
                }
            </div>
        </div>
        </>
    );
}

export default HomePage;