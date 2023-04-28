import { Injectable } from '@angular/core';
import {OrderArchive} from "../Model/OrderArchive";

@Injectable({providedIn: 'root'})
export class ArchiveService {
  private ordersArchive: OrderArchive[] = [];
  getOrdersArchive(): OrderArchive[] {
    return this.ordersArchive;
  }
  addOrderArchive(order: OrderArchive){
    this.ordersArchive.push(order);
  }
}
