import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Order} from "../../Model/Order";
import {OrderArchive} from "../../Model/OrderArchive";
import {PreparedService} from "../../Service/prepared.service";
import {ArchiveService} from "../../Service/archive.service";

@Component({
  selector: 'app-prepared-card',
  templateUrl: './prepared-card.component.html',
  styleUrls: ['./prepared-card.component.css']
})
export class PreparedCardComponent {
  @Input() order:Order = new Order()
  @Output() OnAddOrderPrepared = new EventEmitter();

  constructor(private preparedService: PreparedService, private archiveService: ArchiveService,){}

  AddOrderPrepared(order: Order, check: boolean) {
    this.archiveService.addOrderArchive(new OrderArchive(order, "Выдан"));
    this.preparedService.delOrderPrepared(order);

    this.OnAddOrderPrepared.emit();
  }

  DelOrderPrepared(order: Order, check: boolean) {
    this.archiveService.addOrderArchive(new OrderArchive(order, "Отменён"));
    this.preparedService.delOrderPrepared(order);

    this.OnAddOrderPrepared.emit();
  }
}
