import {Component} from '@angular/core';
import {OrderService} from "../../Service/order.service";
import {Order} from "../../Model/Order";
import {OrderArchive} from "../../Model/OrderArchive";
import {DialogInfoComponent} from "../../Components/dialog-info/dialog-info.component";
import {MatDialog} from "@angular/material/dialog";
import {PreparedService} from "../../Service/prepared.service";
import {ArchiveService} from "../../Service/archive.service";
@Component({
  selector: 'app-panel-cards',
  templateUrl: './panel-cards.component.html',
  styleUrls: ['./panel-cards.component.css']
})
export class PanelCardsComponent {
  orders: Order[] = this.dataService.getOrders();
  ordersPrepared: Order[] = this.preparedService.getOrdersPrepared();
  ordersArchive: OrderArchive[] = this.archiveService.getOrdersArchive();

  constructor(private dataService: OrderService, private preparedService: PreparedService, private archiveService: ArchiveService, public dialog: MatDialog){}

  onChanged() {
    this.orders = this.dataService.getOrders();
    this.ordersPrepared = this.preparedService.getOrdersPrepared();
    this.ordersArchive = this.archiveService.getOrdersArchive();
  }

  openDialogInfo(order: Order): void {
    const dialogRef = this.dialog.open(DialogInfoComponent, {
      data: {order:order},
    });
  }
}
