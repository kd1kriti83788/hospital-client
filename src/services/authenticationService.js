import axios from "axios";

// Doctor ands Patient Login
export const login = async (type, email, password) => {
    try {
        const url = `http://localhost:8080/api/${type}/login`;
        const inputdata={email,password};
        const response = await axios.post(url,inputdata);

        console.log(response);
        const token=response?.data?.data?.[2] ||"";
        if (token?.length > 0){
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("type", type);
        }else{
            console.log(`${type} login failed`);
        }
        return "success";
    } catch (error) {
        console.log(`Error in ${type} login :`, error);
    }
}

// Patient Register
export  const register = async (name, email, mobile, address, password) => {
    try {
        const url = `http://localhost:8080/api/patient/register`;
        const inputdata={name, email, mobile, address, password};
        const response = await axios.post(url,inputdata);
        console.log(response);
        return "success";
    } catch (error) {
        console.log(`Error in Register :`, error.message);
    }
}

// Doctor and patient logout
export const logout = async (type) => {
    try {
        const token = sessionStorage.getItem("token");
        console.log("token received from session storage", token);
        const url = `http://localhost:8080/api/${type}/logout`;
        const inputdata={type};
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const response = await axios.post(url,inputdata,config);
        console.log(response);
        sessionStorage.clear();
        return "success";
    } catch (error) {
        console.log(`Error in ${type} logout :`, error);
    }
}