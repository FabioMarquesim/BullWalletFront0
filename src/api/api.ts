import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
  });
  
  //api.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  //api.defaults.headers.common["Access-Control-Allow-Methods"] = "GET,POST,PUT,DELETE,OPTIONS";
  //api.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With";

export default api