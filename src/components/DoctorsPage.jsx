import { useEffect,useState } from "react";
import './DoctorsPage.css';
import {getAllDoctorsInfo} from "../services/doctorService";

function DoctorsPage() {
    const [doctors, setDocters] = useState([]);
      const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                setLoading(true);
                const data = await getAllDoctorsInfo();
                setDocters(data);   
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchDoctors();
    }, []);

    return (
        <div className="page">
            <h1 className="heading">Our Doctors</h1>
            <div className="card-container">
                {
                    loading ? (
                    <div className="loader-container">
                        <div className="loader"></div>
                        <p>Loading doctors...</p>
                    </div>
                    ):(
                        <>
                        {
                        Array.isArray(doctors) &&
                            doctors.map((doctor) => (
                            <div key={doctor.id} className="doctor-card">
                                <div className="top-section">
                                    <div className="avatar">👨‍⚕️</div>
                                    <div>
                                        <h2 className="doctor-name">{doctor.name}</h2>
                                        <p className="specialization">{doctor.specialization}</p>
                                    </div>
                                </div>
                                <div className="info-section">
                                    <p><strong>Degree:</strong> {doctor.degree}</p>
                                    <p><strong>ID:</strong> {doctor.id}</p>
                                </div>
                                <button className="book-btn"
                                    onClick={() => alert(`Appointment booked with ${doctor.name}`)}>
                                    Book Appointment
                                </button>
                            </div>
                        ))
                    }
                </>
                )}
            </div>
        </div>     
    );
}

export default DoctorsPage;