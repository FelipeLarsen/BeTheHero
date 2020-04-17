import axios from 'axios';

const api = axios.create({
  baseURL: 'http://IP.IP.IP.IP:PORTA'
});

export default api;
