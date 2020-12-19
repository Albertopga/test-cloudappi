import axios from "axios";

const API_URL = "https://my-user-manager.herokuapp.com/";
const API = axios.create({ baseURL: API_URL });

export default API;
