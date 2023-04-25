import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../Model/Order";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() order:Order = new Order(0, [])
  foods: string = ""

  ngOnInit() {
    for (let food of this.order.foods) {
      this.foods += food.name + " ";
    }
  }
}
