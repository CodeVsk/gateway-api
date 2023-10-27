import { PokedexService } from "@/services/pokedex-service";
import { Router } from "express";

export default (router: Router): void => {
  const pokedexService = new PokedexService();
  router.get("/pokedex/cached/especies", async (req, res) => {
    const response = await pokedexService.getPokemonSpeciesCached();

    res.send(response);
  });

  router.get("/pokedex/nocached/especies", async (req, res) => {
    const response = await pokedexService.getPokemonSpeciesNoCached();

    res.send(response);
  });

  router.get("/pokedex/cached/pokemons", async (req, res) => {
    const response = await pokedexService.getAllPokemonsCached();

    res.send(response);
  });

  router.get("/pokedex/nocached/pokemons", async (req, res) => {
    const response = await pokedexService.getAllPokemonsNoCached();

    res.send(response);
  });

  /**
   * @swagger
   * /api/pokedex/cached/pokemons:
   *   get:
   *     description: Rota com sistema de cache Redis
   *     responses:
   *       '200':
   *         description: Resposta de sucesso
   *
   * /api/pokedex/nocached/pokemons:
   *   get:
   *     description: Rota sem sistema de cache Redis
   *     responses:
   *       '200':
   *         description: Resposta de sucesso
   *
   * /api/pokedex/cached/especies:
   *   get:
   *     description: Rota com sistema de cache Redis
   *     responses:
   *       '200':
   *         description: Resposta de sucesso
   *
   * /api/pokedex/nocached/especies:
   *   get:
   *     description: Rota sem sistema de cache Redis
   *     responses:
   *       '200':
   *         description: Resposta de sucesso
   */
};
