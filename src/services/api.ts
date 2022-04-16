import axios from "axios";

const api =  axios.create({
  baseURL: "https://telzir-backend-chalenge.herokuapp.com",
});

export default api;