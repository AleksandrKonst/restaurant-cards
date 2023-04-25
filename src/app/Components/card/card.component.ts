import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from "../../Model/Order";
import {DataService} from "../../Service/data.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Output() OnAddOrder = new EventEmitter();

  @Input() order:Order = new Order(0, [])
  foods: string = ""

  constructor(private dataService: DataService){}

  ngOnInit() {
    for (let food of this.order.foods) {
      this.foods += food.name + " ";
    }
  }

  AddOrder(order:Order) {
    this.dataService.addOrderPrepared(order);
    this.dataService.delOrder(order);

    this.OnAddOrder.emit();
  }
}
