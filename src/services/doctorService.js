import axios from "axios";

export const getAllDoctorsInfo = async () => {
    try {
        const url = `http://localhost:8080/api/doctor/getPartialInfo`;
        const response = await axios.get(url);
        console.log(response);
        const data=response?.data?.data || [];
        return data;
    } catch (error) {
        console.log(`Error in ${type} login :`, error);
    }
};