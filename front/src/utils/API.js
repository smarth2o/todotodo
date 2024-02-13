import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8080',
//   timeout: 5000, // 5초 타임아웃
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

API.interceptors.request.use(function (config) {
  console.log(config.baseURL + config.url);
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default API;