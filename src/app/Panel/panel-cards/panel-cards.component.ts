import { Component } from '@angular/core';
import {DataService} from "../../Service/data.service";
import {Order} from "../../Model/Order";
import {OrderArchive} from "../../Model/OrderArchive";
@Component({
  selector: 'app-panel-cards',
  templateUrl: './panel-cards.component.html',
  styleUrls: ['./panel-cards.component.css']
})
export class PanelCardsComponent {
  orders: Order[] = this.dataService.getOrders();
  ordersPrepared: Order[] = this.dataService.getOrdersPrepared();
  ordersArchive: OrderArchive[] = this.dataService.getOrdersArchive();

  constructor(private dataService: DataService){}

  onChanged() {
    this.orders = this.dataService.getOrders();
    this.ordersPrepared = this.dataService.getOrdersPrepared();
    this.ordersArchive = this.dataService.getOrdersArchive();
  }
}
