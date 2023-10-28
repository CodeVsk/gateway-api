export class CompareResult {
  executionTimer: string;
  content: any;

  constructor(timer: string, result: any) {
    this.executionTimer = timer;
    this.content = result;
  }
}
