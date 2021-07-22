import Axios from "axios";

const BaseUrl = "https://accounts-buddy.herokuapp.com/api";

export const login = async (data) => {
  try {
    const response = await Axios.post(`${BaseUrl}/auth/login`, data);
    return response;
  } catch (error) {
    return { error: true };
  }
};
