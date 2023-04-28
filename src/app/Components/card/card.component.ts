import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from "../../Model/Order";
import {OrderService} from "../../Service/order.service";
import {PreparedService} from "../../Service/prepared.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Output() OnAddOrder = new EventEmitter();
  @Input() order:Order = new Order()

  foods: string = ""

  constructor(private dataService: OrderService, private preparedService: PreparedService){}

  ngOnInit() {
    for (let food of this.order.foods) {
      this.foods += food.name + " -> ";
    }
  }

  AddOrder(order:Order) {
    this.preparedService.addOrderPrepared(order);
    this.dataService.delOrder(order);

    this.OnAddOrder.emit();
  }
}
