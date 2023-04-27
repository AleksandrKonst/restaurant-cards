import {NgModule} from "@angular/core";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  exports: [MatDialogModule,MatInputModule,MatButtonModule,MatSelectModule,MatToolbarModule,MatIconModule,MatCardModule,MatExpansionModule, MatTableModule]
})
export class AppMatModule { }
