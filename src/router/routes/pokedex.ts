import { PokedexService } from "@/services/pokedex-service";
import { Router } from "express";

export default (router: Router): void => {
  const pokedexService = new PokedexService();

  router.get("/pokedex/cached/especies", async (req, res) => {
    console.log(
      "---------------------------[Requisição recebida do client]---------------------------"
    );
    console.log("Solicitação de requisição recebida de um client");

    const response = await pokedexService.getPokemonSpeciesCached();

    res.send(response);

    console.log("Requisição foi retornada ao client");
    console.log(
      "------------------------------------------------------------------------------------"
    );
  });

  router.get("/pokedex/nocached/especies", async (req, res) => {
    console.log(
      "---------------------------[Requisição recebida do client]---------------------------"
    );
    console.log("Solicitação de requisição recebida de um client");

    const response = await pokedexService.getPokemonSpeciesNoCached();

    res.send(response);

    console.log("Requisição foi retornada ao client");
    console.log(
      "------------------------------------------------------------------------------------"
    );
  });

  router.get("/pokedex/cached/pokemons", async (req, res) => {
    console.log(
      "---------------------------[Requisição recebida do client]---------------------------"
    );
    console.log("Solicitação de requisição recebida de um client");

    const response = await pokedexService.getAllPokemonsCached();

    res.send(response);

    console.log("Requisição foi retornada ao client");
    console.log(
      "------------------------------------------------------------------------------------"
    );
  });

  router.get("/pokedex/nocached/pokemons", async (req, res) => {
    console.log(
      "---------------------------[Requisição recebida do client]---------------------------"
    );
    console.log("Solicitação de requisição recebida de um client");

    const response = await pokedexService.getAllPokemonsNoCached();

    res.send(response);

    console.log("Requisição foi retornada ao client");
    console.log(
      "------------------------------------------------------------------------------------"
    );
  });

  /**
   * @swagger
   * /api/pokedex/cached/pokemons:
   *   get:
   *     summary: Retorna uma lista de pokemons.
   *     description: Retorna uma lista de pokemons usando o redis.
   *     tags:
   *      - Pokedex (Servidor Externo 2)
   *     responses:
   *       '200':
   *         description: Resposta de sucesso
   *
   * /api/pokedex/nocached/pokemons:
   *   get:
   *     summary: Retorna uma lista de pokemons.
   *     description: Retorna uma lista de pokemons sem usar redis.
   *     tags:
   *      - Pokedex (Servidor Externo 2)
   *     responses:
   *       '200':
   *         description: Resposta de sucesso
   *
   * /api/pokedex/cached/especies:
   *   get:
   *     summary: Retorna uma lista de espécies de pokemon.
   *     description: Retorna uma lista de espécies de pokemon usando o redis.
   *     tags:
   *      - Pokedex (Servidor Externo 2)
   *     responses:
   *       '200':
   *         description: Resposta de sucesso
   *
   * /api/pokedex/nocached/especies:
   *   get:
   *     summary: Retorna uma lista de espécies de pokemon.
   *     description: Retorna uma lista de espécies de pokemon sem usar redis.
   *     tags:
   *      - Pokedex (Servidor Externo 2)
   *     responses:
   *       '200':
   *         description: Resposta de sucesso
   */
};
