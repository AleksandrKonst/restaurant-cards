import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodCardComponent } from './Panel/food-card/food-card.component';
import { PanelCardsComponent } from './Panel/panel-cards/panel-cards.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DialogAddComponent, DialogOverviewExampleDialog } from './Components/dialog-add/dialog-add.component';
import { CardComponent } from './Components/card/card.component';
import { PreparedCardComponent } from './Components/prepared-card/prepared-card.component';
import { ArchiveCardComponent } from './Components/archive-card/archive-card.component';
import {AppMatModule} from "./app-mat.module";
import {DataService} from "./Service/data.service";
import { DialogEditComponent } from './Components/dialog-edit/dialog-edit.component';

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
    DialogEditComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AppMatModule
    ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
