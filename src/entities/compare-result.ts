import { PokedexResult } from "./pokedex-result";

export class CompareResult {
  executionTimer: string;
  qrcodeResult: any;

  constructor(timer: string, qrcode: any) {
    this.executionTimer = timer;
    this.qrcodeResult = qrcode;
  }
}
