import { Axios } from "@/configs";
import { CatResult } from "@/entities/cat-result";
import { AxiosInstance } from "axios";

export class CatProvider {
  private axiosConfig: Axios;
  private axios: AxiosInstance;

  constructor() {
    this.axiosConfig = new Axios("https://cataas.com/api");
    this.axios = this.axiosConfig._axios;
  }

  async getAllCats(): Promise<CatResult> {
    const result = await this.axios.get("/cats?tags=cute");

    return result.data;
  }

  async getCatTags(): Promise<CatResult> {
    const result = await this.axios.get("/tags");

    return result.data;
  }
}
