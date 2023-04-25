import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Order} from "../../Model/Order";
import {DataService} from "../../Service/data.service";

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
    this.dataService.addOrderArchive(order);
    this.dataService.delOrderPrepared(order);

    this.OnAddOrderPrepared.emit();
  }
}
