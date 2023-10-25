import axios, { AxiosInstance } from "axios";

export class Axios {
  public readonly _axios: AxiosInstance;

  constructor(baseUrl: string){
    this._axios = axios.create({
      baseURL: baseUrl,
      timeout: 5000,
    });
  }
};