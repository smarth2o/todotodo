import API from "../utils/API";

// 회원가입 : id, name, password
export const registerUser = async (userData) => {
    try {
        console.log("registerUser");
        console.log(userData);
        const res = await API.post("/users/register", userData);
        return res.data;
    } catch (error) {
        console.error("registering user:", error);
        throw error;
    }
}