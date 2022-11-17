import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useSelector } from 'react-redux';

const baseUrl2 = process.env.NODE_ENV == 'development' ? '/api/' : 'https://admin.armalis.am/api';

let language = localStorage.getItem('i18nextLng');
if (language == 'en-US') {
  language = 'hy';
}
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-LOCALIZATION': language,
};
const headers1 = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const $host = axios.create({
  baseURL: baseUrl2,
  headers,
  withCredentials: true,
});

export const $host1 = axios.create({
  baseURL: baseUrl2,
  headers1,
  withCredentials: true,
});

export const $authHost = axios.create({
  baseURL: baseUrl2,
  headers,
  withCredentials: true,
});

$authHost.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

$authHost.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        await AsyncStorage.removeItem('token');
      } catch (e) {
        console.log('Unauthenticated');
      }
    }
    throw error;
  },
);

export { baseUrl2 };
