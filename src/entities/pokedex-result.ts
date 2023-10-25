export class PokedexResult {
  count: number;
  next: string;
  previous: string;
  results: Results[];
}

class Results {
  name: string;
  url: string;
}
