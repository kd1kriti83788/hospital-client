import axios from "axios";

// Doctor ands Patient Login
export  const login = async (type, email, password) => {
    const url = `http://localhost:8080/api/${type}/login`;
    try {
        const inputdata={email,password};
        const response = await axios.post(url,inputdata);
        console.log(response);
        alert(`${type} login Successful`);
    } catch (error) {
        console.log(`Error in ${type} login :`, error);

    }
}

// Patient Register
export  const register = async (name, email, mobile, address, password) => {
    const url = `http://localhost:8080/api/patient/register`;
    try {
        const inputdata={name, email, mobile, address, password};
        const response = await axios.post(url,inputdata);
        console.log(response);
        alert(`Register Successful`);
    } catch (error) {
        console.log(`Error in Register :`, error.message);
    }
}