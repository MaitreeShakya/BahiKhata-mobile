import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";

export class Api {
  static instance: Api;

  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://api.example.com", // Replace with your API base URL
      timeout: 10000,
    });
  }

  static getInstance(): Api {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  static getAxios(): AxiosInstance {
    return Api.getInstance().axiosInstance;
  }

  static get<T = any>(
    url: string,
    params: Record<string, any> = {},
    config: AxiosRequestConfig = {}
  ): AxiosPromise<T> {
    return Api.getAxios().get(url, { params, ...config });
  }

  static post<T = any>(
    url: string,
    data?: Record<string, any>,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return Api.getAxios().post(url, data, config);
  }

  static put<T = any>(
    url: string,
    data?: Record<string, any>,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return Api.getAxios().put(url, data, config);
  }

  static delete<T = any>(
    url: string,
    params: Record<string, any> = {},
    config: AxiosRequestConfig = {}
  ): AxiosPromise<T> {
    return Api.getAxios().delete(url, { params, ...config });
  }
}
