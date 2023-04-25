import {Food} from "./Food";

export class Order {
  constructor(id: number, foods : Food[]) {
    this.id = id;
    this.foods = foods;
  }

  id: number;
  foods : Food[];
}
