import axios from 'axios';
const apiUrl = 'http://localhost:50820';

const api = axios.create({
  baseURL: apiUrl,
});

export default api;