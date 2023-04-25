import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {foods} from "../../Model/List/list-food";
import {Food} from "../../Model/Food";
import {Order} from "../../Model/Order";
import {DataService} from "../../Service/data.service";

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
  constructor(private dataService: DataService, public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {food: this.food, description: this.description},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.food != "") {
        this.foodList.push(new Food(result.food, result.description));
      }
    });
  }

  AddOrder() : void {
    this.dataService.addOrder(new Order(this.dataService.getId(), this.foodList));
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
