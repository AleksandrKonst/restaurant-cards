import {Food} from "./Food";

export class Order {
  constructor(id: number = 0, foods : Food[] = []) {
    this.id = id;
    this.foods = foods;
  }

  id: number;
  foods : Food[];
}
