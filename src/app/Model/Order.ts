export class Order {
  constructor(id: number, foods : string[]) {
    this.id = id;
    this.foods = foods;
  }
  id: number;
  foods : string[];
}
