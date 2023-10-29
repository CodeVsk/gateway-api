import { Axios } from "@/configs";
import { CepResult } from "@/entities/cep-result";
import { AxiosInstance } from "axios";

export class CepProvider {
  private axiosConfig: Axios;
  private axios: AxiosInstance;
  private baseUrl: string = "https://cep.awesomeapi.com.br/json";

  constructor() {
    this.axiosConfig = new Axios("https://cep.awesomeapi.com.br/json");
    this.axios = this.axiosConfig._axios;
  }

  async getInfoByCep(cep: string): Promise<CepResult> {
    console.log(
      "Realizando requisição ao serviço Cep em um servidor externo no endereço:",
      this.baseUrl
    );

    const result = await this.axios.get(`/${cep}`);

    console.log(
      "Dados do serviço Cep no servidor externo de endereço",
      this.baseUrl,
      "recuperados com sucesso"
    );

    return result.data;
  }
}
