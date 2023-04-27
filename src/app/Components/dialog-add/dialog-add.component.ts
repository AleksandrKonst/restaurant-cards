import {Component, Inject, ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {foods} from "../../Model/List/list-food";
import {Food} from "../../Model/Food";
import {Order} from "../../Model/Order";
import {DataService} from "../../Service/data.service";
import {MatTable} from "@angular/material/table";

export interface DialogData {
  food: string;
  description: string;
}
@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.css']
})
export class DialogAddComponent {
  food: string = "";
  description: string= "";
  foodList: Food[] = [];

  displayedColumns: string[] = ['name', 'description', 'actions'];

  @ViewChild(MatTable)  table!: MatTable<Food>;
  constructor(private dataService: DataService, public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {food: this.food, description: this.description},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.food != "") {
        this.foodList.push(new Food(result.food, result.description));

        if(this.table != undefined){
          this.table.renderRows();
        }
      }
    });
  }

  AddOrder() : void {
    this.dataService.addOrder(new Order(this.dataService.getId(), this.foodList));
  }

  DelFood(element:Food) {

    this.foodList = this.foodList.filter(fd => fd !== element);
    if(this.table != undefined){
      this.table.renderRows();
    }
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  foods: String[] = foods;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
