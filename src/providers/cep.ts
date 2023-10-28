import { Axios } from "@/configs";
import { CepResult } from "@/entities/cep-result";
import { AxiosInstance } from "axios";

export class CepProvider {
  private axiosConfig: Axios;
  private axios: AxiosInstance;

  constructor() {
    this.axiosConfig = new Axios("https://cep.awesomeapi.com.br/json");
    this.axios = this.axiosConfig._axios;
  }

  async getInfoByCep(cep: string): Promise<CepResult> {
    const result = await this.axios.get(`/${cep}`);

    return result.data;
  }
}
