import { Axios } from "@/configs";
import { DrinkResult } from "@/entities/drink-result";
import { AxiosInstance } from "axios";

export class DrinkProvider {
  private axiosConfig: Axios;
  private axios: AxiosInstance;

  constructor() {
    this.axiosConfig = new Axios("https://www.thecocktaildb.com/api/json/v1/1");
    this.axios = this.axiosConfig._axios;
  }

  async getNoAlcoholicDrink(): Promise<DrinkResult> {
    const result = await this.axios.get("/filter.php?a=Non_Alcoholic");

    return result.data;
  }

  async getAçcoholicDrink(): Promise<DrinkResult> {
    const result = await this.axios.get("/filter.php?a=Alcoholic");

    return result.data;
  }
}
