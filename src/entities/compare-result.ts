import { PokedexResult } from "./pokedex-result";

export class CompareResult {
    executionTimer: string;
    pokedexResult: PokedexResult;

    constructor(timer: string, pokedex: PokedexResult){
        this.executionTimer = timer;
        this.pokedexResult = pokedex;
    }
}