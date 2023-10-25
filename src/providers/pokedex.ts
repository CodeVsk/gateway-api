import { Axios } from "@/configs";
import { PokedexResult } from "@/entities/pokedex-result";
import { AxiosInstance } from "axios";

export class PokedexProvider {
  private axiosConfig: Axios;
  private axios: AxiosInstance;

  constructor() {
    this.axiosConfig = new Axios("https://pokeapi.co/api/v2");
    this.axios = this.axiosConfig._axios;
  }

  async getAllPokemons(): Promise<PokedexResult> {
    const result = await this.axios.get("/pokemon?offset=0&limit=1281");

    return result.data;
  }

  async getPokemonSpecies(): Promise<PokedexResult> {
    const result = await this.axios.get("/pokemon-species");

    return result.data;
  }

  async getPokemonSpeciesInformation(): Promise<PokedexResult> {
    const result = await this.axios.get("/pokemon-species");

    return result.data;
  }
}
