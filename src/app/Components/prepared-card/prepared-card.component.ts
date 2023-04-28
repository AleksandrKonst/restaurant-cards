import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Order} from "../../Model/Order";
import {DataService} from "../../Service/data.service";
import {OrderArchive} from "../../Model/OrderArchive";

@Component({
  selector: 'app-prepared-card',
  templateUrl: './prepared-card.component.html',
  styleUrls: ['./prepared-card.component.css']
})
export class PreparedCardComponent {
  @Input() order:Order = new Order(0, [])
  @Output() OnAddOrderPrepared = new EventEmitter();

  constructor(private dataService: DataService){}

  AddOrderPrepared(order: Order, check: boolean) {
    this.dataService.addOrderArchive(new OrderArchive(order, "Выдан"));
    this.dataService.delOrderPrepared(order);

    this.OnAddOrderPrepared.emit();
  }

  DelOrderPrepared(order: Order, check: boolean) {
    this.dataService.addOrderArchive(new OrderArchive(order, "Отменён"));
    this.dataService.delOrderPrepared(order);

    this.OnAddOrderPrepared.emit();
  }
}
