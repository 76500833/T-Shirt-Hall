import axios from "axios";

const API_URL = "/auth";


//signup
const signup = (email, password) => {
  return axios
    .post(API_URL + "/signup", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};


//login
const login = (email, password) => {
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};


//logout
const logout = () => {
  localStorage.removeItem("user");
};


const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

//exporting
const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;