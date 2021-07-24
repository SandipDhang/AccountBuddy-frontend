import axios from "axios";

const baseURL = "https://accounts-buddy.herokuapp.com/api/";

export default axios.create({ baseURL, withCredentials: true });

// export const login = async (data) => {
//   console.log(data, "inAPI");
//   try {
//     const response = await api.post(`auth/login`, data);
//     return response;
//   } catch (error) {
//     return { isError: true, error: error.response.data };
//   }
// };
