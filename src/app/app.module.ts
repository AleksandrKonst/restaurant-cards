import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodCardComponent } from './Panel/food-card/food-card.component';
import { PanelCardsComponent } from './Panel/panel-cards/panel-cards.component';
import { DialogEditComponent } from './Components/dialog-edit/dialog-edit.component';
import { DialogInfoComponent } from './Components/dialog-info/dialog-info.component';
import { DialogAddComponent, DialogOverviewExampleDialog } from './Components/dialog-add/dialog-add.component';
import { CardComponent } from './Components/card/card.component';
import { PreparedCardComponent } from './Components/prepared-card/prepared-card.component';
import { ArchiveCardComponent } from './Components/archive-card/archive-card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppMatModule} from "./app-mat.module";
import {OrderService} from "./Service/order.service";
import {PreparedService} from "./Service/prepared.service";
import {ArchiveService} from "./Service/archive.service";

@NgModule({
  declarations: [
    AppComponent,
    FoodCardComponent,
    PanelCardsComponent,
    DialogOverviewExampleDialog,
    DialogAddComponent,
    CardComponent,
    PreparedCardComponent,
    ArchiveCardComponent,
    DialogEditComponent,
    DialogInfoComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AppMatModule
    ],
  providers: [OrderService, PreparedService, ArchiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
