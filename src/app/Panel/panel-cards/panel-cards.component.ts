import { Component } from '@angular/core';
import {DataService} from "../../Service/data.service";
import {Order} from "../../Model/Order";
@Component({
  selector: 'app-panel-cards',
  templateUrl: './panel-cards.component.html',
  styleUrls: ['./panel-cards.component.css']
})
export class PanelCardsComponent {
  orders: Order[] = this.dataService.getOrders();

  constructor(private dataService: DataService){}
}
