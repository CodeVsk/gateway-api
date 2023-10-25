import { RedisClientType } from "@redis/client";
import { createClient } from "redis";

export class RedisProvider {
  private client: RedisClientType;

  constructor() {
    this.client = createClient();

    this.client.on("error", () => {
      console.error("Erro na conexão com o servidor Redis");
    });

    this.client.connect();
  }

  async set(key: string, value: string): Promise<string> {
    return await this.client.setEx(key, 3600, value);
  }

  async get(key: string): Promise<string> {
    return await this.client.get(key);
  }

  quit() {
    this.client.quit();
  }
}
