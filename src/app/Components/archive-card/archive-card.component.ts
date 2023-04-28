import {Component, Input} from '@angular/core';
import {Order} from "../../Model/Order";
import {OrderArchive} from "../../Model/OrderArchive";

@Component({
  selector: 'app-archive-card',
  templateUrl: './archive-card.component.html',
  styleUrls: ['./archive-card.component.css']
})
export class ArchiveCardComponent {
  @Input() orderArchive:OrderArchive = new OrderArchive(new Order(), "отменён")
  foods: string = ""

  ngOnInit() {
    for (let food of this.orderArchive.order.foods) {
      this.foods += food.name + " ";
    }
  }
}
