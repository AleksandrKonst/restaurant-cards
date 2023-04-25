import {Order} from "./Order";

export class OrderArchive {
  constructor(order : Order, status : boolean) {
    this.order = order;
    this.status = status;
  }

  order: Order;
  status : boolean;
}
