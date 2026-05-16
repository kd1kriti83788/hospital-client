import "./Navbar.css";

function Navbar(props) {
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
            </div>
        </div>
    );
}

export default Navbar;