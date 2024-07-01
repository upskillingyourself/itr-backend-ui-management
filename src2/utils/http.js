import axios from 'axios';
import { getToken } from './common';


const http = axios.create({
  baseURL: process.env.REST_API_ENDPOINT,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Interceptor for adding authorization token
http.interceptors.request.use(
  async (config) => {
    try {
      const token = await getToken();
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    } catch (error) {
      // Handle error gracefully
      console.error('Error adding authorization token:', error);
      return Promise.reject(error);
    }
  },
  (error) => {
    // Handle request error
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

export default http;
