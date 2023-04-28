import {Order} from "./Order";

export class OrderArchive {
  constructor(order : Order, status : string) {
    this.order = order;
    this.status = status;
  }
  order: Order;
  status : string;
}
