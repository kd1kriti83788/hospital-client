import { logout } from "../services/authenticationService";
import "./Navbar.css";

function Navbar(props) {
    const handleLogout = () =>{
        const type = sessionStorage.getItem("type");
        const status = logout(type);
        if (status === "success"){
            console.log("logout success");
        }
    }
    return (
        <div className="navbar">
            <div className="navbar-left">
                <h2>Hospital Management</h2>
            </div>
            <div className="navbar-right">
                <button onClick={()=> { props.setPage('Home')}}>Home</button>
                <button onClick={()=> { props.setPage('Doctors')}}>Doctors</button>
                <button onClick={()=> { props.setPage('Appointments')}}>Appointments</button>
                <button onClick={()=> { props.setPage('Contact')}}>Contact</button>
                <button onClick={()=> { props.setPage('DoctorsLogin') }}>Doctor's Login</button>
                <button onClick={handleLogout} id="logout-btn">Logout</button>
            </div>
        </div>
    );
}

export default Navbar;