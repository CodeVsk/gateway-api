import { CompareResult } from "@/entities/compare-result";
import { PokedexResult } from "@/entities/pokedex-result";
import { PokedexProvider } from "@/providers/pokedex";
import { RedisProvider } from "@/providers/redis";
import { calculateTime } from "@/utils/calculate-time";

export class PokedexService {
  private redisProvider: RedisProvider;
  private pokedexProvider: PokedexProvider;

  constructor() {
    this.redisProvider = new RedisProvider();
    this.pokedexProvider = new PokedexProvider();
  }

  async getPokemonSpeciesCached(): Promise<CompareResult> {
    const startTime: number = Date.now();

    const cache = await this.redisProvider.get("species");

    if (!cache) {
      const result: PokedexResult =
        await this.pokedexProvider.getPokemonSpecies();

      await this.redisProvider.set("species", JSON.stringify(result));

      const totalTime = calculateTime(startTime);

      return new CompareResult(totalTime, result);
    }

    const totalTime = calculateTime(startTime);

    return new CompareResult(totalTime, await JSON.parse(cache));
  }

  async getPokemonSpeciesNoCached(): Promise<CompareResult> {
    const startTime: number = Date.now();

    const result: PokedexResult =
      await this.pokedexProvider.getPokemonSpecies();

    const totalTime = calculateTime(startTime);

    return new CompareResult(totalTime, result);
  }

  async getAllPokemonsCached(): Promise<CompareResult> {
    const startTime: number = Date.now();

    const cache = await this.redisProvider.get("pokemons");

    if (!cache) {
      const result: PokedexResult = await this.pokedexProvider.getAllPokemons();

      await this.redisProvider.set("pokemons", JSON.stringify(result));

      const totalTime = calculateTime(startTime);

      return new CompareResult(totalTime, result);
    }

    const totalTime = calculateTime(startTime);

    return new CompareResult(totalTime, await JSON.parse(cache));
  }

  async getAllPokemonsNoCached(): Promise<CompareResult> {
    const startTime: number = Date.now();

    const result: PokedexResult = await this.pokedexProvider.getAllPokemons();

    const totalTime = calculateTime(startTime);

    return new CompareResult(totalTime, result);
  }
}

//https://www.themealdb.com/api/json/v1/1/categories.php
//https://cep.awesomeapi.com.br/json/05424020
//https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL
//https://api.hgbrasil.com/weather
