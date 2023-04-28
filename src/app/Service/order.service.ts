import { Injectable } from '@angular/core';
import {Order} from "../Model/Order";

@Injectable({providedIn: 'root'})
export class OrderService {
  private orders: Order[] = [];

  id: number = 1;

  getId(): number {
    return this.id++;
  }
  getOrders(): Order[] {
    return this.orders;
  }
  addOrder(order: Order){
    this.orders.push(order);
  }
  delOrder(order: Order){
    this.orders = this.orders.filter(ord => ord !== order);
  }
}
