import { Axios } from "@/configs";
import { PokedexResult } from "@/entities/pokedex-result";
import { AxiosInstance } from "axios";

export class PokedexProvider {
  private axiosConfig: Axios;
  private axios: AxiosInstance;
  private baseUrl: string = "https://pokeapi.co/api/v2";

  constructor() {
    this.axiosConfig = new Axios(this.baseUrl);
    this.axios = this.axiosConfig._axios;
  }

  async getAllPokemons(): Promise<PokedexResult> {
    console.log(
      "Realizando requisição ao serviço Pokedex em um servidor externo no endereço:",
      this.baseUrl
    );

    const result = await this.axios.get("/pokemon?offset=0&limit=1281");

    console.log(
      "Dados do serviço Pokedex no servidor externo de endereço",
      this.baseUrl,
      "recuperados com sucesso"
    );

    return result.data;
  }

  async getPokemonSpecies(): Promise<PokedexResult> {
    console.log(
      "Realizando requisição ao serviço Pokedex em um servidor externo no endereço:",
      this.baseUrl
    );

    const result = await this.axios.get("/pokemon-species");

    console.log(
      "Dados do serviço Pokedex no servidor externo de endereço",
      this.baseUrl,
      "recuperados com sucesso"
    );

    return result.data;
  }

  async getPokemonSpeciesInformation(): Promise<PokedexResult> {
    console.log(
      "Realizando requisição ao serviço Pokedex em um servidor externo no endereço:",
      this.baseUrl
    );

    const result = await this.axios.get("/pokemon-species");

    console.log(
      "Dados do serviço Pokedex no servidor externo de endereço",
      this.baseUrl,
      "recuperados com sucesso"
    );

    return result.data;
  }
}
