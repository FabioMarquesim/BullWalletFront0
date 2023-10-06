import axios from 'axios';

const api = axios.create({
  baseURL: 'https://651f0a6b44a3a8aa47695bf9.mockapi.io/apibw/v1',
});

export default api;