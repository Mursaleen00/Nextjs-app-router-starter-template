import axios from 'axios';
import { getCookie } from 'cookies-next';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SITE_URL as string, // Replace with your API base URL
});

axiosInstance.interceptors.request.use(
  config => {
    const token = getCookie('accessToken'); // Replace 'token' with the name of your cookie

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
