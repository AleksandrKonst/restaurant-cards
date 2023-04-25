import {Component, Input} from '@angular/core';
import {Order} from "../../Model/Order";

@Component({
  selector: 'app-archive-card',
  templateUrl: './archive-card.component.html',
  styleUrls: ['./archive-card.component.css']
})
export class ArchiveCardComponent {
  @Input() order:Order = new Order(0, [])
  foods: string = ""

  ngOnInit() {
    for (let food of this.order.foods) {
      this.foods += food.name + " ";
    }
  }
}
