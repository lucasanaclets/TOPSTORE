import axios from "axios";
import { localStorageKeys } from "../config/localStorageKeys";
import { sleep } from "../utils/sleep";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

httpClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
  const userRole = localStorage.getItem(localStorageKeys.USER_ROLE);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  if (userRole) {
    config.headers["X-User-Role"] = userRole;
  }

  return config;
});

httpClient.interceptors.response.use(async (data) => {
  await sleep(700);

  return data;
});
