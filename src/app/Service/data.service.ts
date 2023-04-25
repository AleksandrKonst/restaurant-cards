import { Injectable } from '@angular/core';
import {Order} from "../Model/Order";

@Injectable({providedIn: 'root'})
export class DataService {
  private orders: Order[] = [];
  id: number = 1;

  getId(): number {
    return this.id++;
  }
  getOrders(): Order[] {
    return this.orders;
  }
  getOrder(id: number): Order|null {
    let order = this.orders.find(el => el.id == 12);
    if (typeof order === "undefined") {
      return null;
    }
    else {
      return order;
    }
  }
  addOrder(order: Order){
    this.orders.push(order);
  }
}
