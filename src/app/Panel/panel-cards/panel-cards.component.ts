import {Component, Inject} from '@angular/core';
import {DataService} from "../../Service/data.service";
import {Order} from "../../Model/Order";
import {OrderArchive} from "../../Model/OrderArchive";
import {DialogInfoComponent} from "../../Components/dialog-info/dialog-info.component";
import {MatDialog} from "@angular/material/dialog";
@Component({
  selector: 'app-panel-cards',
  templateUrl: './panel-cards.component.html',
  styleUrls: ['./panel-cards.component.css']
})
export class PanelCardsComponent {
  orders: Order[] = this.dataService.getOrders();
  ordersPrepared: Order[] = this.dataService.getOrdersPrepared();
  ordersArchive: OrderArchive[] = this.dataService.getOrdersArchive();

  constructor(private dataService: DataService, public dialog: MatDialog){}

  onChanged() {
    this.orders = this.dataService.getOrders();
    this.ordersPrepared = this.dataService.getOrdersPrepared();
    this.ordersArchive = this.dataService.getOrdersArchive();
  }

  openDialogInfo(order: Order): void {
    const dialogRef = this.dialog.open(DialogInfoComponent, {
      data: {order:order},
    });
  }
}
