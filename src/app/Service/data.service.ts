import { Injectable } from '@angular/core';
import {Order} from "../Model/Order";

@Injectable({providedIn: 'root'})
export class DataService {
  private orders: Order[] = [];
  private ordersPrepared: Order[] = [];
  private ordersArchive: Order[] = [];

  id: number = 1;

  getId(): number {
    return this.id++;
  }
  getOrders(): Order[] {
    return this.orders;
  }
  getOrdersPrepared(): Order[] {
    return this.ordersPrepared;
  }
  getOrdersArchive(): Order[] {
    return this.ordersArchive;
  }
  getOrder(id: number): Order|null {
    let order = this.orders.find(el => el.id == id);
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
  addOrderPrepared(order: Order){
    this.ordersPrepared.push(order);
  }
  addOrderArchive(order: Order){
    this.ordersArchive.push(order);
  }
  delOrder(order: Order){
    this.orders = this.orders.filter(ord => ord !== order);
  }
  delOrderPrepared(order: Order){
    this.ordersPrepared = this.ordersPrepared.filter(ord => ord !== order);
  }
}
