import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import { FoodCardComponent } from './Panel/food-card/food-card.component';
import { PanelCardsComponent } from './Panel/panel-cards/panel-cards.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { DialogAddComponent, DialogOverviewExampleDialog  } from './Components/dialog-add/dialog-add.component';
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { CardComponent } from './Components/card/card.component';
import {MatCardModule} from "@angular/material/card";
import { PreparedCardComponent } from './Components/prepared-card/prepared-card.component';
import { ArchiveCardComponent } from './Components/archive-card/archive-card.component';
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent,
    FoodCardComponent,
    PanelCardsComponent,
    DialogOverviewExampleDialog,
    DialogAddComponent,
    CardComponent,
    PreparedCardComponent,
    ArchiveCardComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatDialogModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatExpansionModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
