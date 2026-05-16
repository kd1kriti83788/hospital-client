import "./Footer.css";

function Footer() {

    return (

        <div className="footer">

            <div className="footer-left">

                <h3>Hospital Management System</h3>

                <p>
                    Manage appointments, doctors and patients easily.
                </p>

            </div>

            <div className="footer-center">

                <h4>Quick Links</h4>

                <p>Home</p>

                <p>Doctors</p>

                <p>Appointments</p>

            </div>

            <div className="footer-right">

                <h4>Contact</h4>

                <p>Email: hospital@gmail.com</p>

                <p>Phone: +91 9876543210</p>

            </div>

        </div>
    );
}

export default Footer;