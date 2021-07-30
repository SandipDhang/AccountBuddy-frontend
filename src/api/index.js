import axios from "axios";

const baseURL = "https://accounts-buddy.herokuapp.com/api/";

export default axios.create({ baseURL, withCredentials: true });
