import { CepResult } from "@/entities/cep-result";
import { CompareResult } from "@/entities/compare-result";
import { CepProvider } from "@/providers/cep";
import { RedisProvider } from "@/providers/redis";
import { calculateTime } from "@/utils/calculate-time";
import { Request } from "express";

export class CepService {
  private redisProvider: RedisProvider;
  private cepProvider: CepProvider;

  constructor() {
    this.redisProvider = new RedisProvider();
    this.cepProvider = new CepProvider();
  }

  async getInfoByCepNoCached(request: Request): Promise<CompareResult> {
    const startTime: number = Date.now();

    const { cep } = request.params;

    const result: CepResult = await this.cepProvider.getInfoByCep(cep);

    const totalTime = calculateTime(startTime);

    return new CompareResult(totalTime, result);
  }

  async getInfoByCepCached(request: Request): Promise<CompareResult> {
    const startTime: number = Date.now();

    console.log(
      "Verificando se existe um cache predefinido no servidor redis de endereço:",
      this.redisProvider.getBaseUrl()
    );

    const { cep } = request.params;

    const cache = await this.redisProvider.get(`info_cep_${cep}`);

    if (!cache) {
      const result: CepResult = await this.cepProvider.getInfoByCep(cep);

      console.log(
        "Predefinindo chave de cache e armazenando os dados retornados na mesma no servidor redis de endereço:",
        this.redisProvider.getBaseUrl()
      );

      await this.redisProvider.set("info_cep", JSON.stringify(result));

      const totalTime = calculateTime(startTime);

      return new CompareResult(totalTime, result);
    }

    const totalTime = calculateTime(startTime);

    console.log(
      "Cache encontrado no servidor redis de endereço:",
      this.redisProvider.getBaseUrl()
    );

    return new CompareResult(totalTime, await JSON.parse(cache));
  }
}
