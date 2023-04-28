import { Injectable } from '@angular/core';
import {Order} from "../Model/Order";

@Injectable({providedIn: 'root'})
export class PreparedService {
  private ordersPrepared: Order[] = [];

  getOrdersPrepared(): Order[] {
    return this.ordersPrepared;
  }
  addOrderPrepared(order: Order){
    this.ordersPrepared.push(order);
  }
  delOrderPrepared(order: Order){
    this.ordersPrepared = this.ordersPrepared.filter(ord => ord !== order);
  }
}

