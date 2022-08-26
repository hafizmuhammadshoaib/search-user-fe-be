import axios, { AxiosRequestConfig } from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
export const useAxios = axios.create({
  baseURL: API_URL,
});

export const apiClient = async (configs: AxiosRequestConfig) => {
  const response = await useAxios.request(configs);
  return response.data;
};
