import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000, //5000 ms --> 5초 안에 응답이 오지 않으면 에러
  headers: { 'Content-Type': 'application/json' },
});

export default apiClient;
