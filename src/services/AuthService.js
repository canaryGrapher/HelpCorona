import axios from "axios";
import URL from '../assets/Constants'

const authService = () => {
    const login = async (email, password) => {
        const loginToken = await axios.post(`${URL}/api/login`, {
            email: email,
            password: password
        })
        if (loginToken.data.token) {
            localStorage.setItem("user", JSON.stringify(loginToken.data.token));
        }
        return loginToken.data.token;
    }

    const logout = () => {
        localStorage.removeItem("user");
    }

    const getCurrentUser = () => {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default authService;
