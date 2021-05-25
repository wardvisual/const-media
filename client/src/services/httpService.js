import axios from "axios";
import { refreshAccessToken } from "../actions/auth";
import { getCookie, setCookie } from "../utils/helpers/cookies";

/* Axios Instance Configuration */
export const authAxiosInstance = axios.create();
export const normalAxiosInstance = axios.create();

const instanceConfig = (instance) => {
  instance.defaults.baseURL = `http://127.0.0.1:4000/api`;
  instance.defaults.withCredentials = true;
};

instanceConfig(normalAxiosInstance); // For normal HTTP request
instanceConfig(authAxiosInstance); // For HTTP request that has authorization
/* Axios Instance Configuration End */

/* Request interceptor for API calls */
authAxiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = getCookie("accessToken");
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

/* Response interceptor for API calls */
authAxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const accessToken = await refreshAccessToken();

      authAxiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${accessToken}`;

      setCookie("accessToken", accessToken);

      Promise.resolve(error);
      return authAxiosInstance(originalRequest);
    }

    return Promise.reject(error);
  }
);
