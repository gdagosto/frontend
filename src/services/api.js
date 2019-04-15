import axios from 'axios';

const api = axios.create({
   //baseURL: "https://dagosto-week6.herokuapp.com",
   baseURL: 'https://omnistack-backend.herokuapp.com'
});

export default api;