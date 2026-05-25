import axios from "axios";

const API = axios.create({
  baseURL:
    "https://internship-backend-jlzq.onrender.com/api",
});

export default API;