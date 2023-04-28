import {Component, Inject, ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {foods} from "../../Model/List/list-food";
import {Food} from "../../Model/Food";
import {Order} from "../../Model/Order";
import {DataService} from "../../Service/data.service";
import {MatTable} from "@angular/material/table";
import {DialogEditComponent} from "../dialog-edit/dialog-edit.component";
import {Router} from "@angular/router";

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
  name: string = "";
  description: string= "";
  foodList: Food[] = [];

  displayedColumns: string[] = ['name', 'description', 'actions', 'edit'];

  @ViewChild(MatTable)  table!: MatTable<Food>;
  constructor(private dataService: DataService, public dialog: MatDialog, private router: Router) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {name: this.name, description: this.description},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.foodList.push(new Food(result.name, result.description));
        this.name = result.name;
        this.description = result.description;

        if(this.table != undefined){
          this.table.renderRows();
        }
      }
    });
  }

  openDialogEdit(fd: Food, index:number): void {
    const dialogRef = this.dialog.open(DialogEditComponent, {
      data: {name:fd.name, description: fd.description},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.food != "") {
        console.log(index);
        console.log(this.foodList);
        this.foodList[index].name = result.name;
        this.foodList[index].description = result.description;

        this.table.renderRows();
      }
    });
  }

  AddOrder() : void {
    this.dataService.addOrder(new Order(this.dataService.getId(), this.foodList));
    this.router.navigate(['/'])
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
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
