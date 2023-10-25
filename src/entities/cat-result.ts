export class CatResult {
  results: Results[];
}

class Results {
  _id: string;
  tags: string[];
  owner: string;
  createdAt: Date;
  updatedAt: Date;
}
