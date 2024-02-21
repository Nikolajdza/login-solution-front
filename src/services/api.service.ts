import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from '@/constants/apiUrl.ts';
import { getJwt } from '../services/auth.service';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

axiosInstance.interceptors.request.use((request) => {
  const token = getJwt();
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

export default axiosInstance;