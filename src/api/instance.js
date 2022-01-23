import axios from "axios";

const instance = axios.create({
    baseURL: "https://61e7a8b7e32cd90017acbbf2.mockapi.io",
    headers: {
        "Content-Type": "application/json"
    }
});

export default instance;